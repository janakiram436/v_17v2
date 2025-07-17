import React from 'react'
import { Routes, Route} from "react-router-dom"
import SignUp from './RegisterPage'
import SignIn from './LoginPage'
import WellCome from "./WellCome"
 function App() {
  return (
    
    <Routes>
      <Route path="/" element = {<SignUp/>}/>
      <Route path = "/signin" element ={<SignIn/>} />
      <Route path = "/wellcome" element = {<WellCome/>}/>
    </Routes>
   
  )
}
export default App
