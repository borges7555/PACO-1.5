//import React from 'react';
import NavBar from '../components/NavBar';
import '../css/Propinas.css'
import { TbCircleLetterE } from "react-icons/tb";
import { TbCircleLetterH } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';


function Apoio() {
    const navigate = useNavigate();
    const navigateToDisciplina = () => {
        navigate(`/disciplina`);
      };
    
  return (
    <div>
        <NavBar/>
        <div className='max-w-7xl h-fit flex flex-col m-auto mt-28'>
            <h2 className='text-5xl w-full text-center font-bold' style={{color: '#333'}}>Turmas do estudante</h2>
            <div className='w-full flex gap-2'>
                <div className='grid grid-cols-[10%_70%_10%_10%] text-xl mt-8 font-bold mb-4 w-full'>
                    <span></span>
                    <span className='w-full text-center' style={{color: '#333'}}>Disciplina</span>
                    <span className='w-full text-center' style={{color: '#333'}}>Turma</span>
                    <span className='w-full text-center' style={{color: '#333'}}>Nº Sumários</span>
                </div>
            </div>
            {/* ISTO É CARD DE DISCIPLINA */}
            <div className='grid grid-cols-[10%_70%_10%_10%] h-full w-full gap-[1px] max-w-7xl mb-7'>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-4xl p-4 gap-4">
                    <div><TbCircleLetterE></TbCircleLetterE></div>
                    <div><TbCircleLetterH></TbCircleLetterH></div>
                </div>
                <div className='justify-center align-middle content-center items-center text-center flex text-2xl font-bold text-white bg-dark'>
                    Compiladores
                </div>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-lg gap-4 box-border">
                <div className="bg-slate-500 cursor-pointer" onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToDisciplina(event)}><u>TP</u></div>
                <div className="bg-slate-500 cursor-pointer" onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToDisciplina(event)}><u>P</u></div>
                </div>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-lg gap-4 box-border">
                    <div className="bg-slate-500 ">9</div>
                    <div className="bg-slate-500 ">5</div>
                </div>
                
            </div>

                        {/* ISTO É CARD DE DISCIPLINA */}
                        <div className='grid grid-cols-[10%_70%_10%_10%] h-full w-full gap-[1px] max-w-7xl mb-7'>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-4xl p-4 gap-4">
                    <div><TbCircleLetterE></TbCircleLetterE></div>
                    <div><TbCircleLetterH></TbCircleLetterH></div>
                </div>
                <div className='justify-center align-middle content-center items-center text-center flex text-2xl font-bold text-white bg-dark'>
                    IHC
                </div>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-lg gap-4 box-border">
                <div className="bg-slate-500 cursor-pointer" onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToDisciplina(event)}><u>TP</u></div>
                <div className="bg-slate-500 cursor-pointer" onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToDisciplina(event)}><u>P</u></div>
                </div>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-lg gap-4 box-border">
                    <div className="bg-slate-500">4</div>
                    <div className="bg-slate-500">5</div>
                </div>
                
            </div>

                        {/* ISTO É CARD DE DISCIPLINA */}
                        <div className='grid grid-cols-[10%_70%_10%_10%] h-full w-full gap-[1px] max-w-7xl mb-7'>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-4xl p-4 gap-4">
                    <div><TbCircleLetterE></TbCircleLetterE></div>
                    <div><TbCircleLetterH></TbCircleLetterH></div>
                </div>
                <div className='justify-center align-middle content-center items-center text-center flex text-2xl font-bold text-white bg-dark'>
                    Base de Dados
                </div>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-lg gap-4 box-border">
                <div className="bg-slate-500 cursor-pointer" onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToDisciplina(event)}><u>TP</u></div>
                <div className="bg-slate-500 cursor-pointer" onClick={(event: React.MouseEvent<HTMLDivElement>) => navigateToDisciplina(event)}><u>P</u></div>
                </div>
                <div className="bg-slate-500 flex flex-col justify-center align-middle content-center items-center text-white bg-dark text-lg gap-4 box-border">
                    <div className="bg-slate-500">4</div>
                    <div className="bg-slate-500">6</div>
                </div>
                
            </div>
            
            
            
            
        </div>
    </div>
  );
}

export default Apoio;
