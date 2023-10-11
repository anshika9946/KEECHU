import { useState, useEffect } from 'react';
import axios from 'axios';

function SubscriberList() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    // Fetch subscribers from your backend when the component mounts
    axios.get('https://keechu.onrender.com/api/subscribers') // Replace with your backend URL
      .then((response) => {
        setSubscribers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching subscribers:', error);
      });
  }, []);

  return (
    <div>
      <h2>Subscriber List</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber._id}>
              <td>{subscriber.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscriberList;
