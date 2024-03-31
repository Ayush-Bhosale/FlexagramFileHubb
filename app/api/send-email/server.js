const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // Replace with your desired port number

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to send an email
app.post('/api/send-email', async (req, res) => {
  const { email } = req.body;

  try {
    // Create a Nodemailer transporter using your email service provider settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Replace with your email address
        pass: 'your-email-password', // Replace with your email password
      },
    });

    // Define email options
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender email address
      to: email, // Recipient email address
      subject: 'Test Email', // Email subject
      text: 'This is a test email sent from Node.js and Nodemailer.', // Email content
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
