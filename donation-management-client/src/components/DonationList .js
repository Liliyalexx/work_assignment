import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationList = () => {
  // State to store list of donations
  const [donations, setDonations] = useState([]);

  // Function to fetch donations from backend
  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/donations');
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  // Fetch donations when component mounts
  useEffect(() => {
    fetchDonations();
  }, []);

  // Function to handle donation deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/donations/${id}`);
      // Remove deleted donation from the list
      setDonations(donations.filter((donation) => donation._id !== id));
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  return (
    <div>
      <h2>Donation List</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation._id}>
            <div>
              <strong>Donor's Name:</strong> {donation.donorName}
            </div>
            <div>
              <strong>Type of Donation:</strong> {donation.donationType}
            </div>
            <div>
              <strong>Quantity or Amount Donated:</strong> {donation.donationAmount}
            </div>
            <div>
              <strong>Date of Donation:</strong> {new Date(donation.donationDate).toLocaleDateString()}
            </div>
            <button onClick={() => handleDelete(donation._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationList;