import './signUp.scss';
import {SignUp, useAuth, useUser} from '@clerk/react';
import axios from 'axios';
import Loading from '../../componets/loading/loading'
import { useEffect } from 'react';
const Register = ()=>{
    const {isLoaded} = useUser();
    return(
        <div className="signUp">
           {
            isLoaded ? <SignUp 
                path="/new-register"
                routing="path"
                signInUrl="/login"
           />: <Loading/>

           }
        </div>
    )
}
export default Register;