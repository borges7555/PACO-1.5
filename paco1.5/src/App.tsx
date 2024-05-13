//import React from 'react';
import Router from './Router'; // Certifique-se que o caminho está correto
import { CertidaoProvider } from './components/CertidaoContext';

function App() {
  return (
    <div>
      <CertidaoProvider>
        <Router />
      </CertidaoProvider>
    </div>
  );
}

export default App;
