//import React from 'react';
import NavBar from '../components/NavBar';
import '../css/Propinas.css'

function Disciplina() {
  return (
    <div>
        <NavBar/>
        <div className='max-w-7xl h-fit flex flex-col m-auto mt-28'>
            <h2 className='text-5xl w-full text-center font-bold' style={{color: '#333'}}>Compiladores - P</h2>
            <div className='grid grid-cols-2 gap-8 w-full mt-4 text-center'>
                <div>
                    <span className='text-2xl font-bold' style={{color: '#333', fontSize: '28px'}}>Sumários</span>
                    <div className='flex flex-col gap-1 ' style={{fontSize: '22px'}}>
                        <div className='bg-dark text-white p-4 grid grid-cols-[40%_40%_10%]'>
                            <span>Aula 1</span>
                            <span>7/4/2024</span>
                            <span><u>Sumário</u></span>
                        </div>
                        <div className='bg-dark text-white p-4 grid grid-cols-[40%_40%_10%]'>
                            <span>Aula 2</span>
                            <span>14/4/2024</span>
                            <span><u>Sumário</u></span>
                        </div>
                        <div className='bg-dark text-white p-4 grid grid-cols-[40%_40%_10%]'>
                            <span>Aula 3</span>
                            <span>21/4/2024</span>
                            <span><u>Sumário</u></span>
                        </div>
                        <div className='bg-dark text-white p-4 grid grid-cols-[40%_40%_10%]'>
                            <span>Aula 4</span>
                            <span>28/4/2024</span>
                            <span><u>Sumário</u></span>
                        </div>
                    </div>
                </div>
                <div>
                    <span  className='text-2xl font-bold' style={{color: '#333', fontSize: '28px'}}>Faltas(1)</span>
                    <div className='flex flex-col gap-1 '>
                        <div className='bg-dark text-white p-4 grid grid-cols-[1fr_1fr] items-center text-center justify-center' style={{fontSize: '22px'}}>
                            <span>Aula 3</span>
                            <span>21/4/2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Disciplina;
