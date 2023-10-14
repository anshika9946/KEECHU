import './css/Newsletter.css'; // Import your CSS file
import { useState } from 'react';
import axios from 'axios';
import Img from '/src/assets/Img.png';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Track the response message

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('https://keechu.onrender.com/api/subscribe', { email });

      if (response.status === 200) {
        // Handle the different response messages
        setMessage(response.data.message);
      } else {
        setMessage('Subscription failed. Please try again later.');
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('Subscription failed. Please try again later.');
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
      <section className="wrapper">
          <div className="container">
            <div className="img__container">
              <img src={Img} alt="keechu" className="img" />
            </div>
            <div className="content">
              <h2 className="subtitle">Get a weekly dose of motivation from KEECHU</h2>
          <input
          className="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        {message && <div className={message.startsWith('Subscription failed.') ? 'error' : 'success'}>{message}</div>}
        <div className="form-group">
          <button type="submit" className="subscribe">Subscribe</button>
          </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Newsletter;
