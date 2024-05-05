import { useState } from 'react';

function PropinasPagas() {
    const [showInvoice, setShowInvoice] = useState(false);
    const paidFees = [
        { id: 1, amount: '€69.7', paymentDate: '2024-05-01' }
    ];

    return (
        <div>
            <h2>Propinas Pagas</h2>
            <ul>
                {paidFees.map(fee => (
                    <li key={fee.id}>
                        {fee.amount}, pagas em {fee.paymentDate}
                        <button onClick={() => setShowInvoice(true)}>Fatura</button>
                        {showInvoice && (
                            <div className="popup">
                                Fatura detalhada aqui...
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
