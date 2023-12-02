const nodemailer = require('nodemailer');

const sendTestEmail = async (req, res) => {
  const { toEmail, subject, emailContent } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: subject,
    html: emailContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log('Test email sent:', info);
    res.status(200).send('Test email sent successfully');
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).send('Error sending test email');
  }
};

module.exports = { sendTestEmail };
