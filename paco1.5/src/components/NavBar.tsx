//import { useState } from 'react';
import '../css/NavBar.css'; // Importar o CSS para estilização
import Dropdown_hor from './Dropdown_hor';
import Dropdown_sec from './Dropdown_sec';
import Dropdown_apoio from './Dropdown_apoio';
import Dropdown_certidao from './Dropdown_certidao';
import Dropdown_conta from './Dropdown_conta';

function NavBar() {

    return (
      <nav className="navbar w-screen">
        <ul className="nav-links max-w-7xl m-auto flex justify-around gap-4">
          <li><a href="/home" style={{fontSize: '28px'}}><b>PACO</b></a></li>
          <li><Dropdown_apoio/></li>
          <li><Dropdown_sec/></li>
          <li><Dropdown_hor/></li>
          <li><Dropdown_certidao/></li>
          <li><Dropdown_conta/></li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
