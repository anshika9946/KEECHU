const nodemailer = require('nodemailer');
const Subscriber = require('../models/Subscriber');

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
      const { email } = subscriber;

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: subject,
        // Use the HTML content from the textarea as the email body
        html: newsletterContent,
      };

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
