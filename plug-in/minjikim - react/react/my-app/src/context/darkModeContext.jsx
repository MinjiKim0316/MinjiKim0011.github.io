import { useContext } from "react";
import { useState } from "react";
import { Children, createContext } from "react";

const darkModeContext = createContext();


export function darkModeProvider({Children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  return (
    <darkModeContext.Provider value={{darkMode, toggleDarkMode}}>{Children}</darkModeContext.Provider>
  ); 
}

function updateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
export const useDarkMode = () => useContext(darkModeContext);