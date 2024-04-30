import { useState } from 'react';
import '../css/Dropdown.css'

function Dropdown_hor() {
    const [isOpen, setIsOpen] = useState(false);
    const openDropdown = () => setIsOpen(true);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button className="dropdown-button">
                Horários ▼
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li><a href="/unavailable">Escolha de Horários</a></li>
                    <li><a href="/unavailable">Lista de Opções</a></li>
                    <li><a href="/unavailable">Horários por Curso</a></li>
                    <li><a href="/unavailable">Ajuda</a></li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown_hor;
