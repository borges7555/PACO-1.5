import { useState } from 'react';
import '../css/Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown_certidao() {
    const [isOpen, setIsOpen] = useState(false);
    const openDropdown = () => setIsOpen(true);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button className="dropdown-button">
                Certidões <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isOpen && (
                <ul className="dropdown-menu cursor-pointer">
                    <li><a href="/unavailable">Nova Certidão</a></li>
                    <li><a href="/unavailable">Listagem de Certidões</a></li>
                    <li><a href="/unavailable">Consulta de Certidão</a></li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown_certidao;
