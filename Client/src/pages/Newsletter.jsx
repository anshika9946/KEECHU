import './Newsletter.css'; // Import your CSS file
import { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('/subscribe', { email });

      if (response.status === 200) {
        // Handle a successful subscription (e.g., show a success message)
      } else {
        setError('Subscription failed. Please try again later.');
      }
    } catch (err) {
      setError('Subscription failed. Please try again later.');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="NewsletterSubscription">
      <form onSubmit={handleSubmit}>
        <h2>Subscribe to Our Newsletter</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
