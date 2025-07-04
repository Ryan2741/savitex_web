const express = require('express');
const cors = require('cors');
const path = require('path');

// Import the email handler
const sendQuoteHandler = require('./api/send-quote.js').default;

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// API route for sending quotes
app.post('/api/send-quote', async (req, res) => {
  try {
    await sendQuoteHandler(req, res);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
