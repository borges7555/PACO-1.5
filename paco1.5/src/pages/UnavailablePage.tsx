//import React from 'react';
import '../css/UnavailablePage.css';
import NavBar from '../components/NavBar';

function UnavailablePage() {
  return (
    <div>
      <NavBar/>
      <div className="centered-message">
        Neste momento, esta funcionalidade encontra-se indisponível.
      </div>
    </div>
  );
}

export default UnavailablePage;
