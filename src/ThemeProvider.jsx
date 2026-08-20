import { createContext, useState } from "react";

export const ThemeContext=createContext();

function ThemeProvider ({children}){
    const[dark, setDark]=useState(false);

    return(
        <div>
            <ThemeContext.Provider value={{dark,setDark}} >
                {children}
            </ThemeContext.Provider>
        </div>
    );
}
export default ThemeProvider;