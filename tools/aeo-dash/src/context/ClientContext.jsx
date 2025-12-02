import { createContext, useContext, useState } from 'react';
import { clients } from '../data/clients';

const ClientContext = createContext();

export const useClient = () => {
    const context = useContext(ClientContext);
    if (!context) {
        throw new Error('useClient must be used within ClientProvider');
    }
    return context;
};

export const ClientProvider = ({ children }) => {
    const [currentClientId, setCurrentClientId] = useState(0);
    const currentClient = clients[currentClientId];

    const switchClient = (clientId) => {
        setCurrentClientId(clientId);
    };

    return (
        <ClientContext.Provider value={{ currentClient, currentClientId, switchClient, clients }}>
            {children}
        </ClientContext.Provider>
    );
};
