//import { useState } from 'react';
import '../css/NavBar.css'; // Importar o CSS para estilização

function NavBar() {

    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/"><b>PACO</b></a></li>
          <li><a href="/">Secretaria Virtual</a></li>
          <li><a href="/">Horários</a></li>
          <li><a href="/">Consulta de Certidão</a></li>
          <li><a href="/">Ajuda</a></li>
          <li><a href="/login">Sair</a></li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
