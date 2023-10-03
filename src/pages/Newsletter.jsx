import './Newsletter.css'; // Import your CSS file
import axios from 'axios'; // Import Axios or your preferred HTTP client library
import { useState } from 'react'; // Import useState from React

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
        setError('Please enter a valid email address.');
        return; // Prevent further processing if email is not valid
      }
    try {
      // Send a POST request to your backend to handle the subscription
      const response = await axios.post('/subscribe', { email });

      if (response.status === 200) {
        console.log(response.data.message);
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
    <div className="Newsletter">
      <form action="/subscribe" method="POST" onSubmit={handleSubmit}>
        <section className="wrapper">
          <div className="container">
            <div className="img__container">
              <img src="src\assets\Img.png" alt="salad" className="img" />
            </div>
            <div className="content">
              <h2 className="subtitle">Get a weekly dose of motivation from KEECHU</h2>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange} // Use the onChange event to update the email state
              />
              <div id="email-error" style={{ color: 'red' }}>
                {error}
              </div>
              <input type="submit" value="Subscribe" className="subscribe" />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Newsletter;
