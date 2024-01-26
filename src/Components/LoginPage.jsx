import "./LoginPage.css"
import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
import FormValidation from "./FormValidation"

const LoginPage = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [Errors, setErrors] = useState({})

    const HandleChange = (event)=>{
        setValues({
            ...values, [event.target.name]: event.target.value 
        })
    }

    const HandleSubmit = (event)=>{
        event.preventDefault();
        setErrors(FormValidation(values))
        if(Object.keys(FormValidation(values)).length === 0){
            setValues({
                email: '',
                password: ''
            })
            alert('you have signed in successfully.')
            // console.log(values)
        }
    }

  return (
    <div className="container">
        <form className="form-container">
            <div className="text">
                <h1>Sign In</h1>
            </div>

            <div className="input-container">
                <label><FontAwesomeIcon icon={faEnvelope}/></label>
                <input type="text" name="email" onChange={HandleChange} placeholder="Enter your Email" value={values.email}></input>
            </div>
            {Errors.email && <span className="error">{Errors.email}</span>}

            <div className="input-container">
                <label><FontAwesomeIcon icon={faLock}/></label>
                <input type="password" name="password" onChange={HandleChange} placeholder="Enter your password" value={values.password}></input>
            
            </div>
            {Errors.password && <span className="error">{Errors.password}</span>}

            <div className="forgot-password">
                <p>Forgot password?</p>
            </div>

            <div className="btn-container">
                <button className="btn" onClick={HandleSubmit}>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage