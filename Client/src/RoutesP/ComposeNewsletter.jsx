import { useState } from 'react';
import axios from 'axios';
import './Pcss/ComposeNewsletter.css'; // Import your CSS file

function ComposeNewsletter() {
  const [subject, setSubject] = useState('');
  const [newsletterContent, setNewsletterContent] = useState('');
  const [error, setError] = useState(null);
  const [isNewsletterSent, setIsNewsletterSent] = useState(false); // Add state for success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://keechu.onrender.com/api/send-newsletter', {
        subject,
        newsletterContent,
      });

      if (response.status === 200) {
        // Handle a successful newsletter submission (e.g., show a success message)
        setIsNewsletterSent(true); // Set success message to true
      } else {
        setError('Newsletter sending failed. Please try again later.');
      }
    } catch (err) {
      setError('Newsletter sending failed. Please try again later.');
    }
  };

  return (
    <div className="newsletter-container">
      <h1>Compose Newsletter</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="newsletterContent">Newsletter Content (HTML):</label>
          <textarea
            id="newsletterContent"
            name="newsletterContent"
            required
            value={newsletterContent}
            onChange={(e) => setNewsletterContent(e.target.value)}
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <input type="submit" value="Send Newsletter" />
        </div>

        {isNewsletterSent && (
          <div className="success-message">Newsletter sent successfully!</div>
        )}
      </form>
    </div>
  );
}

export default ComposeNewsletter;
