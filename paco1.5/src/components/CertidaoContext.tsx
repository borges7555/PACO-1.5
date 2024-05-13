import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CertidaoDetails {
    curso: string;
    tipo: string;
    estado: string;
}

interface ContextType {
    certidao: CertidaoDetails | null;
    submitCertidao: (curso: string, tipo: string, estado: string) => void;
}

interface CertidaoProviderProps {
    children: ReactNode;
}

const initialState: ContextType = {
    certidao: null,
    submitCertidao: () => {}
};

export const CertidaoContext = createContext<ContextType>(initialState);

export const useCertidao = () => useContext(CertidaoContext);

export const CertidaoProvider: React.FC<CertidaoProviderProps> = ({ children }) => {
    const [certidao, setCertidao] = useState<CertidaoDetails | null>(() => {
        const savedCertidao = localStorage.getItem('certidao');
        return savedCertidao ? JSON.parse(savedCertidao) : null;
    });

    const submitCertidao = (curso: string, tipo: string, estado: string) => {
        const newCertidao: CertidaoDetails = { curso, tipo, estado };
        setCertidao(newCertidao);
        localStorage.setItem('certidao', JSON.stringify(newCertidao));
    };

    return (
        <CertidaoContext.Provider value={{ certidao, submitCertidao }}>
            {children}
        </CertidaoContext.Provider>
    );
};