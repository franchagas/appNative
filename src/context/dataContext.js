import React from "react"; 

export const Context = React.createContext();

export const Provider = ({ children }) =>{

    return <Context.Provider value={21.3}>{children}</Context.Provider>;
};
