import { useState } from 'react';

function PropinasNaoPagas() {
    const [showPopup, setShowPopup] = useState(false);
    const unpaidFees = [
        { id: 1, amount: '€69.70', dueDate: '2024-10-01', entity: '23594', reference: '987654321', value: '€69.7' }
    ];

    return (
        <div>
            <h2>Propinas Não Pagas</h2>
            <ul>
                {unpaidFees.map(fee => (
                    <li key={fee.id}>
                        {fee.amount}, até {fee.dueDate}
                        <button onClick={() => setShowPopup(true)}><b>Detalhes</b></button>
                        {showPopup && (
                            <div className="popup">
                                Entidade: {fee.entity}, Referência: {fee.reference}, Valor: {fee.value}
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
