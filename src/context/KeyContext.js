import { createContext,useState } from "react";

export const KeyContext = createContext(false);

export const KeyProvider = ({defaultValue=[],children})=>{
    const [keys,setKeys] = useState(defaultValue);
    const addKey = (key)=>{

        setKeys([keys+key]);
       
    }



    return(
        <KeyContext.Provider value={{keys,addKey}}>
           {children}
        </KeyContext.Provider>
    )

}