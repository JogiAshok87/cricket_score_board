// import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminView from './Pages/AdminView'
import UserView from './Pages/UserView'
import ContextProvider from './ContextAPI'
import './App.css'

function App() {
  

  return (
    <ContextProvider>
   <Router>
    <Routes>
      <Route exact path="/users" element={<UserView />}/>
      <Route exact path="/admin" element={<AdminView />}/>
    </Routes>
   </Router>
   </ContextProvider>
  )
}

export default App
