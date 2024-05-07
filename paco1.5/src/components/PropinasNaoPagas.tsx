import { useState } from 'react';

function PropinasNaoPagas() {
    const [showPopup, setShowPopup] = useState(false);
    const unpaidFees = [
        { id: 1, amount: '€69.70', dueDate: '2024-03-31', entity: '23594', reference: '987654321' },
        { id: 2, amount: '€69.70', dueDate: '2024-04-30', entity: '23594', reference: '987654321' },
        { id: 3, amount: '€69.70', dueDate: '2024-05-31', entity: '23594', reference: '987654321' },
        { id: 4, amount: '€69.70', dueDate: '2024-06-30', entity: '23594', reference: '987654321' }
    ];

    return (
        <div>
            <h2 style={{fontSize: '36px'}}><b>Propinas Não Pagas</b></h2>
            <ul>
                {unpaidFees.map(fee => (
                    <li key={fee.id}>
                        {fee.amount}, até {fee.dueDate} <span className='blanc'>0000</span>
                        <button onClick={() => setShowPopup(true)}><b>Detalhes</b></button>
                        {showPopup && (
                            <div className="popup">
                                Entidade: {fee.entity}, Referência: {fee.reference}, Valor: {fee.amount}
                                <button onClick={() => setShowPopup(false)}>Fechar</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PropinasNaoPagas;
