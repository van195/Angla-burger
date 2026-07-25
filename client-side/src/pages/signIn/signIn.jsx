import Loading from '../../componets/loading/loading';
import './signIn.scss';
import {SignIn, useUser} from '@clerk/react';

const LogIn =()=>{
    const {user, isLoaded}= useUser()
    return(<>
        
        {
            isLoaded ?
            (<div className="SignIn">
                <SignIn
                        path="/login"
                        routing="path"
                        signUpUrl="/new-register"
                />
            </div>):
            <Loading/>}
    </>
    )
}
export default LogIn;