import { useState } from 'react';
import axios from 'axios';
import './Pcss/Unsubscribe.css';

function Unsubscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://keechu.onrender.com/api/unsubscribe/' + email);

      if (response.status === 200) {
        setMessage('You have successfully unsubscribed.');
      } else if (response.status===404){
        setMessage('Subscriber not found.');
      }
      else{
        setMessage('Unsubscription failed. Please try again later.');
      }
    } catch (err) {
      setMessage('Unsubscription failed. Please try again later.');
    }
  };

  return (
    <div className="unsubscribe-container">
      <div className="unsubscribe-box">
        <h1 className="unsubscribe-title">Unsubscribe</h1>
        <form onSubmit={handleSubmit} className="unsubscribe-form">
          <label htmlFor="email" className="unsubscribe-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="unsubscribe-input"
          />
          <button type="submit" className="unsubscribe-button">Unsubscribe</button>
        </form>
        <div className="unsubscribe-message">{message}</div>
      </div>
    </div>
  );
}

export default Unsubscribe;
