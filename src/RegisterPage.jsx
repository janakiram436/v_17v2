import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css';

 const SignUp = () => {
    const [userDeatils, setUserDetails] = useState({
                                                    name : "",
                                                    email : "",
                                                    id : "",
                                                    password:"",
                                                    confirmPassword : ""

        
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
        localStorage.setItem("userdetail", JSON.stringify(userDeatils))
        navigate("/signin")
      }                                                
  return (
     <div className="signup-container">
  <h1 className="signup-title">Register Form</h1>
  <form className="signup-form" onSubmit={sendUserData}>
    <div className="form-group">
      <label>Name:</label>
      <input type="text" name="name" value={userDeatils.name} onChange={handleingInput} />
    </div>
    <div className="form-group">
      <label>Id:</label>
      <input type="text" name="id" value={userDeatils.id} onChange={handleingInput} />
    </div>
    <div className="form-group">
      <label>Email:</label>
      <input type="email" name="email" value={userDeatils.email} onChange={handleingInput} />
    </div>
    <div className="form-group">
      <label>Password:</label>
      <input type="password" name="password" value={userDeatils.password} onChange={handleingInput} />
    </div>
    <div className="form-group">
      <label>Confirm Password:</label>
      <input type="password" name="confirmPassword" value={userDeatils.confirmPassword} onChange={handleingInput} />
    </div>
    <button className="submit-btn" type="submit">Register</button>
  </form>
</div>

  )
}
export default SignUp 

// Name,Email,ID,Password, confirm password
// Add a "Show/Hide Password" toggle button to show/hide the password.
// On form submission:Send