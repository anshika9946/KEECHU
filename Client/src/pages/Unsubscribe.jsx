import { useState } from 'react';
import axios from 'axios';

function Unsubscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/unsubscribe/' + email);

      if (response.status === 200) {
        setMessage('You have successfully unsubscribed.');
      } else {
        setMessage('Unsubscription failed. Please try again later.');
      }
    } catch (err) {
      setMessage('Unsubscription failed. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Unsubscribe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>{message}</div>
        <button type="submit">Unsubscribe</button>
      </form>
    </div>
  );
}

export default Unsubscribe;
