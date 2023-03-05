import {createContext, useEffect, useState} from 'react';

export const LayoutContext = createContext();

export function LayoutContextProvider({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        console.log("sidebar log > ",isSidebarOpen)
    }, [isSidebarOpen]);


    return (
        <LayoutContext.Provider
            value={{
                isSidebarOpen, setIsSidebarOpen,
            }}>

            {children}

        </LayoutContext.Provider>
    );
}

export const LayoutConsumer = LayoutContext.Consumer;

