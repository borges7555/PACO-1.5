import { useState } from 'react';

function PropinasPagas() {
    const [showInvoice, setShowInvoice] = useState(false);
    const paidFees = [
        { id: 1, amount: '€69.70', paymentDate: '2023-09-28' },
        { id: 2, amount: '€69.70', paymentDate: '2023-10-31' },
        { id: 3, amount: '€69.70', paymentDate: '2023-11-30' },
        { id: 4, amount: '€69.70', paymentDate: '2023-12-27' },
        { id: 5, amount: '€69.70', paymentDate: '2024-01-29' },
        { id: 6, amount: '€69.70', paymentDate: '2024-02-28' }
    ];

    return (
        <div>
            <h2 style={{fontSize: '36px'}}><b>Propinas Pagas</b></h2>
            <ul>
                {paidFees.map(fee => (
                    <li key={fee.id}>
                        {fee.amount}, paga em {fee.paymentDate} <span className='blanc'>0000</span>
                        <button onClick={() => setShowInvoice(true)}><b>Fatura</b></button>
                        {showInvoice && (
                            <div className="popup">
                                <img src="src/assets/fatura.png" alt="Fatura" />
                                <button onClick={() => setShowInvoice(false)}>Fechar</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PropinasPagas;
