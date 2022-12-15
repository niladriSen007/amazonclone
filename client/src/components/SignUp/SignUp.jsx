import "../SignIn/SignIn.scss"
import Logo from "../../assets/blacklogoamazon.png"
import { NavLink } from "react-router-dom"
import { Divider } from "@mui/material"
import { useState } from "react"

const SignUp = () => {

  const [formData, setFormdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});

const handleChange = (e) =>{
  const {name,value} = e.target;
  setFormdata(prevFormData=>{
    return{
      ...prevFormData,
      [name]:value,
    }
  })
}

console.log(formData)

  return (
    <>
      <section style={{top:"100px"}}>
        <div className="sign_container">
          <div className="sign_header">
            <img src={Logo} alt="amazon" />
          </div>
          <div className="sign_form">
          <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                onChange={e=>handleChange(e)}
                                value={formData.fname}
                                placeholder="Enter your name"
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                                onChange={e=>handleChange(e)}
                                value={formData.email}
                                  placeholder="Enter your email"
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="phone" name="mobile"
                                onChange={e=>handleChange(e)}
                                value={formData.mobile}
                                  placeholder="Enter your mobile no"
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={e=>handleChange(e)}
                                value={formData.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password again</label>
                            <input type="password" name="cpassword"
                                onChange={e=>handleChange(e)}
                                value={formData.cpassword}
                                placeholder="Enter the password as above"
                                id="password" />
                        </div>
                        <button type="submit" className="signin_btn">Continue</button>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/signin">Sign in</NavLink>
                        </div>
                    </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp