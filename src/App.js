import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import DiagnosisForm from './DiagnosisForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <p></p>
        <Signup />
        <p></p>
        <DiagnosisForm />
      </header>
    </div>
  );
}

export default App;
