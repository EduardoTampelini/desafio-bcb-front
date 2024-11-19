
import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    theme?:string 
    alterTheme?: ()=> void
}

const AppContext = createContext<AppContextProps>({});


  
  export function AppProvider(props) { 
    const [theme, setTheme] = useState('')
   function altertheme(){
    const newTheme = theme ==='' ? 'dark' : ''
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
   }
   useEffect(()=>{
      const themeSave: string = localStorage.getItem('theme') 
      setTheme(themeSave)
   })
    return (

      <AppContext.Provider value={{theme, alterTheme:altertheme}}>{props.children}</AppContext.Provider>
    );
  }
  
  export default AppContext;
