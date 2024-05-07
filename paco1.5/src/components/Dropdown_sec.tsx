import { useState } from 'react';
import '../css/Dropdown.css'
import { useNavigate } from 'react-router-dom';


function Dropdown_sec() {
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
                Secretaria Virtual ▼
            </button>
            {isOpen && (
                <ul className="dropdown-menu cursor-pointer">
                    <li><a href="/unavailable">Dados Pessoais</a></li>
                    <li><a href="/unavailable">Matrículas</a></li>
                    <li><a href="/unavailable">Plano Curricular</a></li>
                    <li><a href="/unavailable">Inscrições</a></li>
                    <li><a href="/unavailable">Calendário de Avaliações</a></li>
                    <li><a onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToApoio(event)}>Apoio às Aulas</a></li>
                    <li><a href="/propinas">Pagamentos</a></li>
                    <li><a href="/unavailable">Requerimentos</a></li>
                    <li><a href="/unavailable">Certidões</a></li>
                    <li><a href="/unavailable">Creditações</a></li>
                </ul>
            )}
        </div>
    );
}

export default Dropdown_sec;
