import { useClerk, useUser } from '@clerk/react';
import './AccountReveal.scss';

const AccountReveal =()=>{
    const {signOut} = useClerk();
    const {user,isLoaded} = useUser();
    const logOut = async()=>{
      await signOut({
        redirectUrl: "/login"
      })
    }
    return(
        <div className="AccountReveal">
          <div className="theAvatar">
            <img src={user?.imageUrl} alt="" />
            <h1>{user?.emailAddresses[0].emailAddress}</h1>
            <button className="logOut" onClick={()=>logOut()}>
              Log out
            </button>
          </div>
          <div className="theOrderHistory">
            <h2>Order History</h2>
          </div>
        </div>
    )
}
export default AccountReveal;