import { useState } from 'react';
import '../css/Dropdown.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown_apoio() {
    const navigate = useNavigate();
    const navigateToApoio = () => {
        navigate(`/apoio`);
      };

    const [isOpen, setIsOpen] = useState(false);
    const openDropdown = () => setIsOpen(true);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button className="dropdown-button">
                Apoio às Aulas <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isOpen && (
                <ul className="dropdown-menu cursor-pointer">
                    <li><a onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToApoio(event)}>Turmas do Aluno</a></li>
                    <li><a href="/unavailable">Plano Curricular</a></li>
                    <li><a href="/unavailable">Inscrições</a></li>
                    <li><a href="/unavailable">Calendário de Avaliações</a></li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown_apoio;
