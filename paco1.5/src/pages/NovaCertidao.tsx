import NavBar from '../components/NavBar';
import { useState } from 'react';
import '../css/NovaCertidao.css';
import { useCertidao } from '../components/CertidaoContext';

function NovaCertidao() {
    const cursos = [
        "Licenciatura em Engenharia de Computadores e Informática"
    ];

    const certidoes = [
        "Certidão de Aprovação",
        "Certidão de Inscrição",
        "Certidão Passe sub23"
    ];
    
    const [cursoSelecionado, setCursoSelecionado] = useState(cursos[0]);
    const [certidaoSelecionada, setCertidaoSelecionada] = useState(certidoes[0]);
    const [showPopup, setShowPopup] = useState(false);
    const { submitCertidao } = useCertidao();

    const handleSubmit = () => {
        if (!cursoSelecionado || !certidaoSelecionada) {
            console.log("Seleção incompleta");
        } else {
            setShowPopup(true);
            submitCertidao(cursoSelecionado, certidaoSelecionada, "Em Processamento");
            console.log('Submetido:', cursoSelecionado, certidaoSelecionada);
        }
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
                <button onClick={handleSubmit} disabled={!cursoSelecionado || !certidaoSelecionada}>Submeter</button>
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
