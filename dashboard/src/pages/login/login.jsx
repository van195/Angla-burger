import "./login.scss";
import abstaract from '../../assets/backgroundDecore.png'
import { Link } from "react-router-dom";
const Login = ()=>{
    return(
        <div className="login">
            <div className="backgroundDecores">
                <img src={abstaract} alt="" />
            </div>
           <div className="loginContainer">
              <h2>Please fill in your unique admin login details below</h2>
              <div className="theInputs">
                <label >Email address</label>
                <input type="email" />
                <label >Password</label>
                <input type="password" />
                <label >ID No.</label>
                <input type="text" />
              </div>
              <p className="doNotHaveAccount">Don't Have An Account? <Link style={{textDecoration:'none',color: '#000'}} >Sign Up</Link></p>
              <button className="signUpButton">
                Sign In
              </button>
           </div>
        </div>
    )
}
export default Login;