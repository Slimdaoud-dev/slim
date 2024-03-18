"use client"
import React, { createContext,  useState, useContext, useEffect } from 'react';

export const SidebarContext = createContext({
    openSidebar: true,
    setOpenSidebar: () => {}
});

export default function SidebarProvider({ children }) {
    const [openSidebar, setOpenSidebar] = useState(true);

    useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpenSidebar(false) : setOpenSidebar(true)
        );

        return () => {
            window.removeEventListener('resize', () => { });
        }
    }, []);

    return (
        <SidebarContext.Provider
            value={{
                openSidebar,
                setOpenSidebar,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebarContext() {
    return useContext(SidebarContext);
}
