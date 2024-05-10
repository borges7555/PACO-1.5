import { useState } from 'react';
import '../css/Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Dropdown_conta() {
    const [isOpen, setIsOpen] = useState(false);
    const openDropdown = () => setIsOpen(true);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button className="dropdown-button">
                <FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isOpen && (
                <ul className="dropdown-menu cursor-pointer">
                    <li><a href="/unavailable">Dados Pessoais</a></li> 
                    <li><a href="/unavailable">Ajuda</a></li>
                    <li><a href="/">Sair</a></li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown_conta;
