import React, { useState, useRef, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../css/Propinas.css';

interface Fee {
    id: number;
    amount: string;
    date: string;
    paid: boolean;
    entity?: string;
    reference?: string;
}

function Propinas() {
    const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const popupRef = useRef<HTMLDivElement | null>(null);
    const fees: Fee[] = [
        { id: 1, amount: '€69.70', date: '2024-03-31', paid: false, entity: '23594', reference: '987654321' },
        { id: 2, amount: '€69.70', date: '2024-04-30', paid: false, entity: '23594', reference: '987654321' },
        { id: 3, amount: '€69.70', date: '2024-05-31', paid: false, entity: '23594', reference: '987654321' },
        { id: 4, amount: '€69.70', date: '2024-06-30', paid: false, entity: '23594', reference: '987654321' },
        { id: 5, amount: '€69.70', date: '2023-09-28', paid: true },
        { id: 6, amount: '€69.70', date: '2023-10-31', paid: true },
        { id: 7, amount: '€69.70', date: '2023-11-30', paid: true },
        { id: 8, amount: '€69.70', date: '2023-12-27', paid: true },
        { id: 9, amount: '€69.70', date: '2024-01-29', paid: true },
        { id: 10, amount: '€69.70', date: '2024-02-28', paid: true }
    ];

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
    };

    const handleDetailClick = (fee: Fee): void => {
        setShowDetails(prev => ({ ...prev, [fee.id]: !prev[fee.id] }));
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            setShowDetails({});
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const sortedFees = [...fees].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div>
            <NavBar />
            <div className="propinas-container">
            <h1>a</h1>
            <h1>a</h1>
            <h1>a</h1>
            <h2 className="propinas-title">Propinas</h2>
                <div className="title-sort-container">
                    
                    <button onClick={toggleSortOrder} className="sort-button">
                        Ordenar por Data ({sortOrder === 'asc' ? 'Ascendente' : 'Descendente'})
                    </button>
                </div>
                <div className="fees-container">
                    <ul className="fees-list">
                        {sortedFees.map(fee => (
                            <li key={fee.id} className={`fee-item ${fee.paid ? 'paid' : 'unpaid'}`}>
                                <div className="fee-info">
                                    <span>{formatDate(fee.date)} - {fee.amount}</span>
                                    <button onClick={() => handleDetailClick(fee)}>
                                        {fee.paid ? 'Fatura' : 'Detalhes'}
                                    </button>
                                </div>
                                {showDetails[fee.id] && fee.paid && (
                                    <div className="popup" ref={popupRef}>
                                        <img src="src/assets/fatura.png" alt="Fatura" style={{ width: '100%' }} />
                                        <button onClick={() => handleDetailClick(fee)}>Fechar</button>
                                    </div>
                                )}
                                {showDetails[fee.id] && !fee.paid && (
                                    <div className="popup" ref={popupRef}>
                                        <p>Entidade: {fee.entity}</p>
                                        <p>Referência: {fee.reference}</p>
                                        <p>Valor: {fee.amount}</p>
                                        <button onClick={() => handleDetailClick(fee)}>Fechar</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Propinas;
