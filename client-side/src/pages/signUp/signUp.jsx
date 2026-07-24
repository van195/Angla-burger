import './signUp.scss';
import {SignUp} from '@clerk/react';

const Register =()=>{
    return(
        <div className="signUp">
           {
            <SignUp/> ? <SignUp 
                path="/new-register"
                routing="path"
                signUpUrl="/login"
           />: <Loading/>

           }
        </div>
    )
}
export default Register;