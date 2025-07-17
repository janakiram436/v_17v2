import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './SignIn.css';

 const SignIn = () => {
    const [userDeatils, setUserDetails] = useState({
                                                   
                                                    id : "",
                                                    password:""


                                                       })
       const navigate = useNavigate()                                           
      const handleingInput = e => {
          setUserDetails({
            ...userDeatils, [e.target.name] : e.target.value
          })
      } 
      const sendUserData = e => {
        e.preventDefault()
        console.log(userDeatils)
        const verifyingUser = JSON.parse(localStorage.getItem("userdetail"))
        let bool =  false
        for (let item in userDeatils){
            if (userDeatils[item] === verifyingUser[item]){
                bool = true 
            }
        }
        if (bool){
          navigate("/wellcome")   
        }
        else{
        console.log("wrong user details")
        }
      }                                                
  return (
     <div className="signin-container">
  <h1 className="signin-title">Login Form</h1>
  <form className="signin-form" onSubmit={sendUserData}>
    <div className="form-group">
      <label>Id:</label>
      <input
        type="text"
        name="id"
        value={userDeatils.id}
        onChange={handleingInput}
      />
    </div>
    <div className="form-group">
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={userDeatils.password}
        onChange={handleingInput}
      />
    </div>
    <button className="submit-btn" type="submit">
      Login
    </button>
  </form>
</div>

     
          

  )
}
export default SignIn

// Name,Email,ID,Password, confirm password
// Add a "Show/Hide Password" toggle button to show/hide the password.
// On form submission:Send