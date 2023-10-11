import { useState, useEffect } from 'react';
import axios from 'axios';
import './SubscriberList.css';


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
            <th>S.no</th>
            <th>Email</th>
            <th>Is Verified</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber, index) => (
            <tr key={subscriber._id}>
              <td>{index + 1}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.isVerified ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubscriberList;
