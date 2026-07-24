import './signIn.scss';
import {SignIn} from '@clerk/react';

const LogIn =()=>{
    return(
        <div className="SignIn">
           <SignIn
                path="/login"
                routing="path"
                signUpUrl="/new-register"
           />
        </div>
    )
}
export default LogIn;