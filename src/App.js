import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs); 
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedAge = calculateAge(dob);
    setAge(calculatedAge);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Date of Birth:
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
          <button type="submit">Calculate Age</button>
        </form>
        {age !== null && (
          <div>
            <h2>Your Age: {age} years</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
