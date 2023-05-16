import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Children, createContext } from "react";

const darkModeContext = createContext();


export function darkModeProvider({Children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(()=>{
    const isDark = 
      localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
    }, []);
    
  return (
    <darkModeContext.Provider value={{darkMode, toggleDarkMode}}>{Children}</darkModeContext.Provider>
  ); 
}

function updateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
export const useDarkMode = () => useContext(darkModeContext);