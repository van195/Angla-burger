import './profile.scss'
import { useState } from 'react';
import {useUser} from '@clerk/react';
import AccountReveal from '../AccountReveal/AccountReveal';
const Profile =()=>{
    const {user,isLoaded} = useUser();
    const email = user.emailAddresses[0].emailAddress;
    const firstLetter = email.charAt(0).toUpperCase(); 
    const [showAccount , setShowAccount] = useState(false); 
    return(
        <>
            <button onClick={()=>setShowAccount((prev) => !prev)} className="profile">
            <h1>{firstLetter}</h1>
            </button>
            {
                showAccount ? (<AccountReveal/>):
                ('')
            }
        </>
    )
}
export default Profile