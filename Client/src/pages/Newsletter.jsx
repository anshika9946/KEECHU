import './Newsletter.css'; // Import your CSS file
import { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false); // Track subscription status

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/api/subscribe', { email });
    
      if (response.status === 200) {
        // Handle a successful subscription (e.g., show a success message or redirect)
      } else if (response.status === 400 && response.data.error === 'Email address is already subscribed.') {
        setError('Email address is already subscribed.');
      } else {
        setError('Subscription failed. Please try again later.');
      }
    } catch (err) {
      console.error('Error:', err);
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
      {!isSubscribed ? (
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
      ) : (
        <div className="success-message">
          Kindly check your email for verification. Once verified, you are subscribed!
        </div>
      )}
    </div>
  );
}

export default Newsletter;
