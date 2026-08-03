import "./navbar.scss";
import man from "../../assets/flat-illustration-in-grayscale-avatar-user-profile-person-icon-anonymous-profile-profile-picture-for-social-media-profiles-icons-screensaver-free-vector.jpg";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="wrapper">
               <div className="search">
                    <input type="text" placeholder="Search...." />
                    <SearchIcon/>
               </div>
               <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <NightlightRoundIcon className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon"/>
                    </div>
                    <div className="item">
                        <EditNotificationsOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineIcon className="icon"/>
                    </div>
                    <div className="item">
                        <ListIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img src={man} alt="" className="avator"/>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Navbar