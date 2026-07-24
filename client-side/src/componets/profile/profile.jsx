import {useUser} from '@clerk/react';
const Profile =()=>{
    const {user} = useUser();
    console.log(user);
    const firstName = user?.fullName.charAt(0).toUpperCase;
    return(
        <div className="profile">
           <h1>{firstName}</h1>
        </div>
    )
}
export default Profile