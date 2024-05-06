import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  // State for form input fields
  const [donorName, setDonorName] = useState('');
  const [donationType, setDonationType] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationDate, setDonationDate] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send donation data to the backend
      const response = await axios.post('http://localhost:5000/donations', {
        donorName,
        donationType,
        donationAmount,
        donationDate
      });
      console.log('Donation submitted successfully:', response.data);
      // Reset form fields after submission
      setDonorName('');
      setDonationType('');
      setDonationAmount('');
      setDonationDate('');
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  return (
    <div>
      <h2>Donation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Donor's Name:</label>
          <input type="text" value={donorName} onChange={(e) => setDonorName(e.target.value)} required />
        </div>
        <div>
          <label>Type of Donation:</label>
          <input type="text" value={donationType} onChange={(e) => setDonationType(e.target.value)} required />
        </div>
        <div>
          <label>Quantity or Amount Donated:</label>
          <input type="text" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} required />
        </div>
        <div>
          <label>Date of Donation:</label>
          <input type="date" value={donationDate} onChange={(e) => setDonationDate(e.target.value)} required />
        </div>
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonationForm;