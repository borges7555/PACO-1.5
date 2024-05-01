//A IMAGEM NAO APARECE NA PAGINA

//import { useState } from 'react';
import NavBar from '../components/NavBar';
import '../css/Home.css'

function Home() {

    return (
      <div>
        <NavBar/>
        <div className='greetings'>
          <b>Olá, @username</b>
        </div>
        <div className="content">
          <div className="left-container">
            <p>
              <b><u>ATENDIMENTO AO PÚBLICO</u></b><br></br><br></br>
              Atendimento presencial:<br></br><br></br>
              09h30 às 13h00<br></br>
              14h30 às 17h00<br></br>
              Segunda a Sexta<br></br><br></br>
              Para maior comodidade, pode efetuar o agendamento: <u>clique aqui</u> para marcar.<br></br><br></br>
              Saiba aqui quais os processos que podem ser tratados à distância.
            </p>
          </div>
          <div className="right-container">
            <img src="../assets/horario.png" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;