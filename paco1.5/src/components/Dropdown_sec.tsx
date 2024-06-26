import { useState } from 'react';
import '../css/Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown_sec() {
    const [isOpen, setIsOpen] = useState(false);
    const openDropdown = () => setIsOpen(true);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button className="dropdown-button">
                Secretaria Virtual <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isOpen && (
                <ul className="dropdown-menu cursor-pointer">
                    <li><a href="/unavailable">Dados Pessoais</a></li> 
                    <li><a href="/unavailable">Matrículas</a></li>
                    <li><a href="/propinas">Propinas</a></li>
                    <li><a href="/unavailable">Requerimentos</a></li>
                    <li><a href="/unavailable">Creditações</a></li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown_sec;
