import React from 'react';
import Navbar from './navbar';
import './App.css'; // You can create this file for global styling
import CenteredLogo from './CenteredLogo';
import Footer from './footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Rest of your app content */}

      <CenteredLogo />
      {/* Rest of your app content */}


<Footer/>
    </div>
  );
}

export default App;
