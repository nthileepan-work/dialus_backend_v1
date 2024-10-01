const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
  
    // Check if all fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Create a transporter using Gmail SMTP
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,  // Your Gmail address from .env file
          pass: process.env.GMAIL_PASS,  // Your Gmail App Password from .env file
        },
      });
  
      // Define email options
      let mailOptions = {
        from: email,  // Sender's email address (user input)
        to: process.env.GMAIL_USER,  // Your email address to receive messages
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      };
  
      // Send the email
      await transporter.sendMail(mailOptions);
  
      // Success response
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error.message);
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  });


  module.exports = router;
