import NavBar from '../components/NavBar';
import { useState } from 'react';
import '../css/NovaCertidao.css';

function NovaCertidao() {
    const [cursoSelecionado, setCursoSelecionado] = useState('');
    const [certidaoSelecionada, setCertidaoSelecionada] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const cursos = [
        "Licenciatura em Engenharia de Computadores e Informática"
    ];

    const certidoes = [
        "Certidão de Aprovação",
        "Certidão de Inscrição",
        "Certidão Passe sub23"
    ];

    const handleSubmit = () => {
        // Ação de submissão, por exemplo:
        console.log(`Curso: ${cursoSelecionado}, Certidão: ${certidaoSelecionada}`);
        // Implemente a lógica de submissão aqui
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Esconde o popup
    };

    return (
        <div>
            <NavBar />
            <div className="nova-certidao">
                <h1><b>Nova Certidão</b></h1>
                <div>
                    <label>Escolha seu curso:</label>
                    <select value={cursoSelecionado} onChange={e => setCursoSelecionado(e.target.value)}>
                        {cursos.map(curso => (
                            <option key={curso} value={curso}>{curso}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Escolha o tipo de certidão:</label>
                    <select value={certidaoSelecionada} onChange={e => setCertidaoSelecionada(e.target.value)}>
                        {certidoes.map(certidao => (
                            <option key={certidao} value={certidao}>{certidao}</option>
                        ))}
                    </select>
                </div>
                <button onClick={handleSubmit}>Submeter</button>
                {showPopup && (
                    <div className="popup">
                        Certidão Submetida
                        <button onClick={handleClosePopup}>Fechar</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NovaCertidao;
