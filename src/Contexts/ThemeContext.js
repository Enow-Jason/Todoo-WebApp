import React, {createContext, useState} from "react";


export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const lightTheme = {
        text: '#222',
        background: '#d8ddf1'
    };
    const darkTheme = {
        text: '#fff',
        background: '#5c5c5c'
    };

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    return(
        <ThemeContext.Provider value={{ isDarkTheme, lightTheme, darkTheme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;