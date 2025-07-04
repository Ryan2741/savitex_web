#!/bin/bash

# SAVITEX Website Server Setup Script
# This script sets up the production environment for the SAVITEX website

set -e  # Exit on any error

echo "🚀 Starting SAVITEX Website Server Setup..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}[SETUP]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root for security reasons"
   print_status "Please run as a regular user with sudo privileges"
   exit 1
fi

# Update system packages
print_header "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 18.x
print_header "Installing Node.js 18.x..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    print_status "Node.js installed: $(node --version)"
else
    print_status "Node.js already installed: $(node --version)"
fi

# Install PM2 globally
print_header "Installing PM2 process manager..."
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
    print_status "PM2 installed: $(pm2 --version)"
else
    print_status "PM2 already installed: $(pm2 --version)"
fi

# Install Nginx
print_header "Installing and configuring Nginx..."
if ! command -v nginx &> /dev/null; then
    sudo apt install -y nginx
    print_status "Nginx installed"
else
    print_status "Nginx already installed"
fi

# Create application directory
print_header "Setting up application directory..."
sudo mkdir -p /var/www/savitex
sudo chown -R $USER:www-data /var/www/savitex
sudo chmod -R 755 /var/www/savitex

# Create logs directory
mkdir -p /var/www/savitex/logs

# Configure Nginx
print_header "Configuring Nginx..."
sudo tee /etc/nginx/sites-available/savitex > /dev/null <<EOF
server {
    listen 80;
    server_name _;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
    
    # Static files
    location / {
        try_files \$uri \$uri/ @nodejs;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # Proxy to Node.js application
    location @nodejs {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
    }
    
    # API routes
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
    
    # Security: Block access to sensitive files
    location ~ /\. {
        deny all;
    }
    
    location ~ /(package\.json|server\.js|ecosystem\.config\.js)$ {
        deny all;
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/savitex /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
print_status "Testing Nginx configuration..."
sudo nginx -t

# Install UFW firewall
print_header "Configuring firewall..."
if ! command -v ufw &> /dev/null; then
    sudo apt install -y ufw
fi

# Configure firewall rules
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable

print_status "Firewall configured and enabled"

# Setup PM2 startup script
print_header "Configuring PM2 startup..."
pm2 startup | grep -E '^sudo' | bash || true
print_status "PM2 startup configured"

# Create a sample environment file
print_header "Creating sample environment file..."
cat > /var/www/savitex/.env.example << EOF
NODE_ENV=production
PORT=3001
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=web-form-submit@savitex.co.za
SMTP_PASS=your-email-password
SMTP_SECURE=true
EOF

print_status "Sample environment file created at /var/www/savitex/.env.example"

# Set up log rotation
print_header "Setting up log rotation..."
sudo tee /etc/logrotate.d/savitex > /dev/null <<EOF
/var/www/savitex/logs/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 644 $USER www-data
    postrotate
        pm2 reloadLogs
    endscript
}
EOF

# Create a deployment script
print_header "Creating deployment helper script..."
cat > /var/www/savitex/deploy.sh << 'EOF'
#!/bin/bash

# SAVITEX Deployment Helper Script

set -e

APP_DIR="/var/www/savitex/current"
BACKUP_DIR="/var/www/savitex/backup-$(date +%Y%m%d-%H%M%S)"

echo "🚀 Starting deployment..."

# Stop the application
echo "Stopping application..."
pm2 stop savitex || true

# Backup current deployment
if [ -d "$APP_DIR" ]; then
    echo "Creating backup..."
    mv "$APP_DIR" "$BACKUP_DIR"
fi

# The GitHub Action will copy files here
mkdir -p "$APP_DIR"

echo "✅ Deployment preparation complete"
EOF

chmod +x /var/www/savitex/deploy.sh

# Create a rollback script
cat > /var/www/savitex/rollback.sh << 'EOF'
#!/bin/bash

# SAVITEX Rollback Script

set -e

APP_DIR="/var/www/savitex/current"
BACKUP_DIR=$(ls -t /var/www/savitex/backup-* 2>/dev/null | head -n 1)

if [ -z "$BACKUP_DIR" ]; then
    echo "❌ No backup found to rollback to"
    exit 1
fi

echo "🔄 Rolling back to: $BACKUP_DIR"

# Stop current application
pm2 stop savitex || true

# Remove current deployment
rm -rf "$APP_DIR"

# Restore backup
mv "$BACKUP_DIR" "$APP_DIR"

# Start application
cd "$APP_DIR"
pm2 start ecosystem.config.js --env production || pm2 restart savitex

echo "✅ Rollback completed successfully"
EOF

chmod +x /var/www/savitex/rollback.sh

# Start and enable services
print_header "Starting services..."
sudo systemctl enable nginx
sudo systemctl restart nginx
sudo systemctl status nginx --no-pager

# Final setup
print_status "Setting proper permissions..."
sudo chown -R $USER:www-data /var/www/savitex
sudo chmod -R 755 /var/www/savitex

# Display setup summary
print_header "Setup Summary"
echo -e "${GREEN}✅ Node.js:${NC} $(node --version)"
echo -e "${GREEN}✅ NPM:${NC} $(npm --version)"
echo -e "${GREEN}✅ PM2:${NC} $(pm2 --version)"
echo -e "${GREEN}✅ Nginx:${NC} $(nginx -v 2>&1)"
echo -e "${GREEN}✅ Application Directory:${NC} /var/www/savitex"
echo -e "${GREEN}✅ Logs Directory:${NC} /var/www/savitex/logs"
echo -e "${GREEN}✅ Firewall:${NC} Configured and enabled"

print_header "Next Steps"
echo "1. Configure your GitHub repository secrets:"
echo "   - SERVER_HOST: Your server IP address"
echo "   - SERVER_USER: $USER"
echo "   - SERVER_SSH_KEY: Your private SSH key"
echo "   - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE"
echo ""
echo "2. Copy the environment variables:"
echo "   cp /var/www/savitex/.env.example /var/www/savitex/.env"
echo "   nano /var/www/savitex/.env  # Edit with your actual values"
echo ""
echo "3. Push your code to trigger the GitHub Action deployment"
echo ""
echo "4. Useful commands:"
echo "   - View logs: pm2 logs savitex"
echo "   - Restart app: pm2 restart savitex"
echo "   - Rollback: /var/www/savitex/rollback.sh"
echo "   - Check status: pm2 status"
echo ""

print_status "🎉 SAVITEX Website server setup completed successfully!"
print_warning "Remember to configure your environment variables before deployment!"

# Show current server IP
SERVER_IP=$(curl -s ifconfig.me || echo "Unable to detect")
echo -e "${BLUE}Your server IP:${NC} $SERVER_IP"
echo -e "${BLUE}Website will be available at:${NC} http://$SERVER_IP"