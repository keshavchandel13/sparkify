const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',  // frontend url
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS policy
app.use(express.json()); // Middleware to parse JSON request bodies

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,      // Sender's email
    pass: process.env.PASSWORD,   // Sender's email password
  },
});

// Handle form submission via POST
app.post('/send-email', (req, res) => {
  const { name, phone, email, message } = req.body;

  // Set up email options
  const mailOptions = {
    from: process.env.EMAIL,  // Sender email
    to: process.env.RECEIVER_EMAIL, // Receiver email
    subject: 'Contact Form Submission',
    text: `
      Name: ${name}
      Phone number: ${phone}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send email using transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: error.toString() });  // Return JSON error
    }

    // Return success message as JSON
    res.status(200).json({
      message: 'Email sent successfully'
    });
  });
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
