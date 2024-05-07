//import { useState } from 'react';
import '../css/NavBar.css'; // Importar o CSS para estilização
import Dropdown_hor from './Dropdown_hor';
import Dropdown_sec from './Dropdown_sec';

function NavBar() {

    return (
      <nav className="navbar w-screen">
        <ul className="nav-links max-w-7xl m-auto flex justify-around gap-4">
          <li><a href="/home"><b>PACO</b></a></li>
          <li><Dropdown_sec/></li>
          <li><Dropdown_hor/></li>
          <li><a href="/unavailable">Consulta de Certidão</a></li>
          <li><a href="/unavailable">Ajuda</a></li>
          <li><a href="/">Sair</a></li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
