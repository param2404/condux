import React, { createContext, useState } from 'react';


export const ThemeContext = createContext()

function ThemeContextProvider(props){
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [showProducts, setShowProducts] = useState(true);
    const light = { color: '#555',ui:'#ddd', bg: '#eee' }
    const dark = { color: '#ddd',ui:'#333', bg: '#555' }
    
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }

    const toggleView = () => {
        setShowProducts(!showProducts)
    }

    return (<ThemeContext.Provider value={{isLightTheme,dark,light,toggleTheme,showProducts,toggleView}} >
        {props.children}
    </ThemeContext.Provider>)
}

export default ThemeContextProvider