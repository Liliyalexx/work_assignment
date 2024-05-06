import logo from './logo.svg';
import './App.css';
import DonationForm from './components/DonationForm';
import DonationList from './components/DonationList';

function App() {
  return (
    <div className="App">
      <h1>Donation Management</h1>
      <DonationForm />
      <DonationList />
    </div>
  );
}

export default App;
