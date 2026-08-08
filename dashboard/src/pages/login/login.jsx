import "./login.scss";
import abstaract from '../../assets/backgroundDecore.png'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from 'axios';
import { AuthContext } from "../../context/authContext";
const Login = ()=>{
    const [ formData,setFormData ] = useState({
        email:'',
        password:'',
        idNo:''
    });
    const [error,setError] = useState(null)
    const{ token,user, dispatch, loading} = useContext(AuthContext);
    const navigator = useNavigate()
    const handleClick = async ()=>{
        dispatch({ type:"LOGIN_START"});
        try {
            const res = await axios.post('http://localhost:8080/api/users/createAdmin-user',{
                email:formData.email,
                password:formData.password,
                idNo:formData.idNo
            })
            dispatch({ type:"LOGIN_SUCCESS", payload: {user: res.data, token: res.data.token}});
            navigator("/");
        } catch (error) {
            setError(error);
        }
    }
    console.log(error)
    return(
        <div className="login">
            <div className="backgroundDecores">
                <img src={abstaract} alt="" />
            </div>
           <div className="loginContainer">
              <h2>Please fill in your unique admin login details below</h2>
              <div className="theInputs">
                <label >Email address</label>
                <input type="email"  value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
                <label >Password</label>
                <input type="password" value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})} />
                <label >ID No.</label>
                <input type="text"  value={formData.idNo} onChange={(e)=>setFormData({...formData, idNo:e.target.value})}/>
              </div>
              <p className="doNotHaveAccount">Don't Have An Account? <Link to='/sign-up' style={{textDecoration:'none',color: '#000'}} >Sign Up</Link></p>
              <button className="signUpButton" onClick={handleClick}>
                Sign In
              </button>
           </div>
        </div>
    )
}
export default Login;