import { useState } from 'react';
import axios from 'axios';
import './Pcss/TestEmail.css'; // Import your CSS file

function TestEmail() {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const [error, setError] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSendTestEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://keechu.onrender.com/api/send-test-email', {
        toEmail,
        subject,
        emailContent,
      });

      if (response.status === 200) {
        setIsEmailSent(true);
      } else {
        setError('Email sending failed. Please try again later.');
      }
    } catch (err) {
      setError('Email sending failed. Please try again later.');
    }
  };

  return (
    <div className="test-email-container">
      <h1>Send Test Email</h1>
      <form onSubmit={handleSendTestEmail}>
        <div className="form-group">
          <label htmlFor="toEmail">To Email:</label>
          <input
            type="email"
            id="toEmail"
            name="toEmail"
            required
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailContent">Email Content (HTML):</label>
          <textarea
            id="emailContent"
            name="emailContent"
            required
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <input type="submit" value="Send Test Email" />
        </div>

        {isEmailSent && (
          <div className="success-message">Test email sent successfully!</div>
        )}
      </form>
    </div>
  );
}

export default TestEmail;
