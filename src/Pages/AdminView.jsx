import React, { useEffect,useContext} from 'react'
import {Context} from '../ContextAPI'
import '../CSS/AdminView.css'

const AdminView = () => {
  // const [count,setCount] = useState(0)
  // const [wicket,setWickets] = useState(0)
  // const [overs,setOvers] = useState(0)
  // const [balls,setBalls] = useState(0)
  const {count,setCount,wicket,setWickets,balls,setBalls,overs,setOvers} = useContext(Context)


  useEffect(()=>{
    if (balls==6){
      setOvers(overs+1)
      setBalls(0)
    }
  },[balls])

  useEffect(() => {
    console.log({ count, balls });
  }, [count, balls]);
  

  
  return (
    <section className='Admin-bg'>
        <header>
            <h1>Score:{count}</h1>/<p>Wickets:{wicket}</p>                                                                        
            <p>Overs:{overs}.{balls}</p>
       </header>
       <div className='score-btns'>
            <h1>Control View</h1>
            <button onClick={()=>{setCount(prevCount=>prevCount+0);setBalls(prevBalls=>prevBalls+1);console.log({ count, balls })}}>0</button>                         
            <button onClick={()=>{setCount(prevCount=>prevCount+1);setBalls(prevBalls=>prevBalls+1);console.log({ count, balls })}}>1</button>
            <button onClick={()=>{setCount(prevCount=>prevCount+2);setBalls(prevBalls=>prevBalls+1);console.log({ count, balls })}}>2</button>
            <button onClick={()=>{setCount(prevCount=>prevCount+3);setBalls(prevBalls=>prevBalls+1);console.log({ count, balls })}}>3</button>
            <button onClick={()=>{setCount(prevCount=>prevCount+4);setBalls(prevBalls=>prevBalls+1);console.log({ count, balls })}}>4</button>
            <button onClick={()=>{setCount(prevCount=>prevCount+5);setBalls(prevBalls=>prevBalls+1);console.log({ count, balls })}}>5</button>
            <button onClick={()=>{setCount(prevCount=>prevCount+6);setBalls(prevBalls=>prevBalls+1);console.log({ count, balls })}}>6</button>
            <button onClick={()=>{setWickets((prevWickets)=>prevWickets+1);setBalls(balls+1);console.log({ count, balls })}}>Out</button>
       </div>  
                                                       
    </section>
    
  )
}

export default AdminView