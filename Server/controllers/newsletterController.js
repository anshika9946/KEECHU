const nodemailer = require('nodemailer');
const Subscriber = require('../models/Subscriber');
require('dotenv').config();

const sendWelcomeEmail = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to Your App!',
      html: '<p>Thank you for joining us! Welcome to our community.</p>',
    };

    await transporter.sendMail(mailOptions);

    console.log(`Welcome email sent successfully to ${email}.`);
  } catch (error) {
    console.error(`Error sending welcome email to ${email}:`, error);
  }
};

const sendNewsletter = async (req, res) => {
  try {
    const { subject, newsletterContent } = req.body;

    // Create a transporter for sending emails (nodemailer setup)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Retrieve all verified subscribers from the database
    const subscribers = await Subscriber.find({ isVerified: true });

    // Loop through the subscribers and send the newsletter email to each one
    for (const subscriber of subscribers) {
      const { email, isWelcomeEmailSent } = subscriber;

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: subject,
        html: newsletterContent,
      };

      // Check if the welcome email has not been sent
      if (!isWelcomeEmailSent) {
        // Send the welcome email
        await sendWelcomeEmail(email);

        // Update the subscriber's isWelcomeEmailSent to true
        await Subscriber.updateOne({ email }, { isWelcomeEmailSent: true });
      }

      // Send the newsletter email
      await transporter.sendMail(mailOptions);
    }

    console.log('Newsletter sent successfully.');

    res.status(200).json({ message: 'Newsletter sent to all subscribers.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the newsletter.' });
  }
};

module.exports = {
  sendNewsletter,
};
