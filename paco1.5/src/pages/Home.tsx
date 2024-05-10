import NavBar from '../components/NavBar';
import '../css/Home.css';
import Horario from '../components/Horario';

function Home() {

    return (
        <div>
            <NavBar />
            <div className='max-w-7xl m-auto'>
                <div className='greetings'>
                    <h2 style={{fontSize: '34px'}}><b>Olá, aluno@ua.pt</b></h2>
                </div>
                <div className="content">
                    <div className="left-container">
                        <p>
                            <b><u>ATENDIMENTO AO PÚBLICO</u></b><br></br><br></br>
                            Atendimento presencial:<br></br><br></br>
                            09h30 às 13h00<br></br>
                            14h30 às 17h00<br></br>
                            Segunda a Sexta<br></br><br></br>
                            Para maior comodidade, pode efetuar o agendamento: <a href="/unavailable"><u>clique aqui</u></a> para marcar.<br></br><br></br>
                            Saiba aqui quais os processos que podem ser tratados à distância.
                        </p>
                    </div>
                    <div className="right-container">
                        <Horario/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
