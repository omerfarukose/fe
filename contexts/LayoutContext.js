import {createContext, useState} from 'react';

export const LayoutContext = createContext();

export function LayoutContextProvider({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [contentType, setContentType] = useState(0);

    return (
        <LayoutContext.Provider
            value={{
                isSidebarOpen, setIsSidebarOpen,
                showContent, setShowContent,
                contentType, setContentType,
            }}>

            {children}

        </LayoutContext.Provider>
    );
}

export const LayoutConsumer = LayoutContext.Consumer;

