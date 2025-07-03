const nodemailer = require('nodemailer');

// Create transporter using environment variables or default SMTP settings
const createTransporter = () => {
  // For production, use environment variables
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  
  // For development/demo, use the configured SMTP settings
  return nodemailer.createTransporter({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'web-form-submit@savitex.co.za',
      pass: 'z7/zlhjdEI',
    },
    debug: true, // Enable debug logging
    logger: true, // Enable logging
  });
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Received quote request:', req.body);

    const {
      productName,
      customerName,
      customerEmail,
      customerPhone,
      company,
      quantity,
      message
    } = req.body;

    // Validate required fields
    if (!productName || !customerName || !customerEmail) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Creating transporter...');
    const transporter = createTransporter();

    // Test the connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return res.status(500).json({ error: 'SMTP configuration error' });
    }

    // Email content
    const emailContent = `
      <h2>New Quote Request from SAVITEX Website</h2>
      
      <h3>Product Information:</h3>
      <p><strong>Product:</strong> ${productName}</p>
      ${quantity ? `<p><strong>Quantity:</strong> ${quantity}</p>` : ''}
      
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${customerEmail}</p>
      ${customerPhone ? `<p><strong>Phone:</strong> ${customerPhone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      
      ${message ? `
        <h3>Additional Requirements:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      ` : ''}
      
      <hr>
      <p><small>This quote request was submitted through the SAVITEX website on ${new Date().toLocaleString()}.</small></p>
    `;

    // Email to sales team
    const mailOptions = {
      from: 'web-form-submit@savitex.co.za',
      to: 'sales@savitex.co.za',
      subject: `Quote Request: ${productName} - ${customerName}`,
      html: emailContent,
      replyTo: customerEmail,
    };

    console.log('Sending email to sales team...');
    const salesEmailResult = await transporter.sendMail(mailOptions);
    console.log('Sales email sent successfully:', salesEmailResult.messageId);

    // Send confirmation email to customer
    const confirmationEmail = {
      from: 'web-form-submit@savitex.co.za',
      to: customerEmail,
      subject: 'Quote Request Received - SAVITEX (Pty) Ltd',
      html: `
        <h2>Thank you for your quote request!</h2>
        
        <p>Dear ${customerName},</p>
        
        <p>We have received your quote request for <strong>${productName}</strong> and will get back to you within 24 hours.</p>
        
        <h3>Your Request Details:</h3>
        <p><strong>Product:</strong> ${productName}</p>
        ${quantity ? `<p><strong>Quantity:</strong> ${quantity}</p>` : ''}
        ${message ? `<p><strong>Requirements:</strong> ${message}</p>` : ''}
        
        <p>If you have any urgent questions, please contact us directly:</p>
        <ul>
          <li>Email: sales@savitex.co.za</li>
          <li>Phone: +27 31 123 4567</li>
        </ul>
        
        <p>Best regards,<br>
        SAVITEX Sales Team</p>
        
        <hr>
        <p><small>SAVITEX (Pty) Ltd - Premium Knitted Garments Manufacturer</small></p>
      `,
    };

    console.log('Sending confirmation email to customer...');
    const confirmationResult = await transporter.sendMail(confirmationEmail);
    console.log('Confirmation email sent successfully:', confirmationResult.messageId);

    res.status(200).json({ 
      success: true, 
      message: 'Quote request sent successfully',
      salesEmailId: salesEmailResult.messageId,
      confirmationEmailId: confirmationResult.messageId
    });
  } catch (error) {
    console.error('Error sending quote request:', error);
    res.status(500).json({ 
      error: 'Failed to send quote request',
      details: error.message 
    });
  }
}