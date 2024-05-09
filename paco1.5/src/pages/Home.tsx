import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../css/Home.css';

function Home() {
    const navigate = useNavigate();
    const hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

    const events = [
        {
            day: "Segunda",
            startTime: 16,
            endTime: 19,
            title: "ICM - 45424",
            location: "TP1 -04.1.06",
            path: '/disciplina'
        },
        {
            day: "Terça",
            startTime: 9,
            endTime: 10,
            title: "BD - 42532",
            location: "P9 - 04.2.14",
            path: '/disciplina'
        },
        {
            day: "Quarta",
            startTime: 9,
            endTime: 10,
            title: "PECI - 41953",
            location: "P1 - ANF. V",
            path: '/disciplina'
        },
        {
            day: "Quinta",
            startTime: 9,
            endTime: 10,
            title: "IHC - 41549",
            location: "P4 - 04.1.06",
            path: '/disciplina'
        },
        {
            day: "Sexta",
            startTime: 9,
            endTime: 10,
            title: "BD - 42532",
            location: "TP2 - ANF. V",
            path: '/disciplina'
        },
        {
            day: "Sexta",
            startTime: 16,
            endTime: 19,
            title: "C - 45434",
            location: "P1 -04.1.03",
            path: '/disciplina'
        },
        {
            day: "Quinta",
            startTime: 14,
            endTime: 16,
            title: "IHC - 41549",
            location: "TP2 - 04.2.14"
            ,path: '/disciplina'
        }
    ];

    const handleEventClick = (events: { day?: string; startTime?: number; endTime?: number; title?: string; location?: string; path: any; }) => {
        if (events.path) {
            navigate(events.path);
        } else {
            alert('Caminho não especificado para este evento.');
        }
    };

    const findEvent = (days: string, hours: string) => {
        const hourNumber = parseInt(hours.split(':')[0], 10);
        return events.find(event => event.day === days && hourNumber >= event.startTime && hourNumber < event.endTime);
    };

    return (
        <div>
            <NavBar />
            <div className='max-w-7xl m-auto'>
                <div className='greetings'>
                    <h2>Olá, aluno@ua.pt</h2>
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
                        <table className="schedule-table">
                            <thead>
                                <tr>
                                    <th>Horário</th>
                                    {days.map(day => <th key={day}>{day}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {hours.map((hour, _hourIndex) => (
                                    <tr key={hour}>
                                        <td>{hour}</td>
                                        {days.map((day, _dayIndex) => {
                                            const event = findEvent(day, hour);
                                            if (event && parseInt(hour.split(':')[0], 10) === event.startTime) {
                                                return (
                                                    <td key={day + hour} rowSpan={event.endTime - event.startTime}
                                                        onClick={() => handleEventClick(event)}
                                                        style={{ cursor: 'pointer', backgroundColor: '#434343' }}>
                                                        {`${event.title} ${event.location}`}
                                                    </td>
                                                );
                                            } else if (event && (parseInt(hour.split(':')[0], 10) > event.startTime && parseInt(hour.split(':')[0], 10) < event.endTime)) {
                                                return null;
                                            }
                                            return <td key={day + hour}></td>;
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
