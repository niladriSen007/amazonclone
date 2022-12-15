import "./SignIn.scss"
import Logo from "../../assets/blacklogoamazon.png"
import { NavLink } from "react-router-dom"
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
});
const handleChange = e =>{
  const {name,value} = e.target;

  setFormdata(prevFormData=>{
    return{
      ...prevFormData,
      [name]:value,
    }
  })
}

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={Logo} alt="amazon" />
          </div>
          <div className="sign_form">
            <form>
            <h1>Sign-In</h1>
            <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={e=>handleChange(e)}
                                value={formData.email}
                                id="email" 
                                placeholder="Enter your Email"/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={e=>handleChange(e)}
                                value={formData.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>
            </form>
          </div>
           <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <button>  <NavLink to="/signup">Create your Amazon Account</NavLink></button>
                </div>
        </div>
      </section>
    </>
  )
}

export default SignIn