import React,{createContext,useState} from "react";

export const Context = createContext()

const ContextProvider = (props) =>{
    const [count,setCount] = useState(0)
    const [wicket,setWickets] = useState(0)
    const [overs,setOvers] = useState(0)
    const [balls,setBalls] = useState(0)

    const contextValue = {count,setCount,wicket,setWickets,balls,setBalls,overs,setOvers}

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
      

}

export default ContextProvider