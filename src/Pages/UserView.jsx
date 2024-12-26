import React,{useContext} from 'react'
import  {Context} from "../ContextAPI"
import '../CSS/UserView.css'

const UserView = () => {
  const {count,setCount,wicket,setWickets,balls,setBalls,overs,setOvers} = useContext(Context)
  console.log({count,setCount,wicket,setWickets,balls,setBalls,overs,setOvers})
  
  return (
    <section className='userView-bg'>
        <header className='header_score'>
            <h1>{count}/{wicket}</h1>
            <p>{overs}.{balls}</p>
        </header>

    </section>
  )
}

export default UserView