import NavBar from '../components/NavBar';
import '../css/ListagemCertidoes.css';
import { useCertidao } from '../components/CertidaoContext';

function ListagemCertidoes() {
    const { certidao } = useCertidao();
    console.log("Certidao: ", certidao);

    return (
        <div>
            <NavBar />
            <div className='card'>
                <h1><b>Listagem de Certidões</b></h1>
                {certidao && (
                    <div className="cardDetails">
                        <p>Tipo: {certidao.tipo}</p>
                        <p>Curso: {certidao.curso}</p>
                        <p>Estado: {certidao.estado}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListagemCertidoes;
