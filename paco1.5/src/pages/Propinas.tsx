//import React from 'react';
import NavBar from '../components/NavBar';
import '../css/Propinas.css'
import PropinasNaoPagas from '../components/PropinasNaoPagas';
import PropinasPagas from '../components/PropinasPagas';

function Propinas() {
  return (
    <div>
      <NavBar/>
      <div className='title' style={{fontSize: '56px'}}>
        <h2><b>Propinas</b></h2>
      </div>
      <div className='content'>
        <div className='left-container'>
          <PropinasNaoPagas/>
        </div>
        <div className='right-container'>
            <PropinasPagas/>
        </div>
      </div>
    </div>
  );
}

export default Propinas;
