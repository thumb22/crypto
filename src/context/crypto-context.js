import { createContext, useState, useEffect } from "react";

const CryptoContext = createContext({
    assets: [],
    crypto: [],
    loading: false,
});

export function CryptoContextProvider({ children }) {
    return (
        <CryptoContext.Provider value={{}}>{children}</CryptoContext.Provider>
    );
}
