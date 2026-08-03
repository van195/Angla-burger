import "./sidebar.scss";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo"><img src="/images.png" alt="" style={{width:'50px',height:'50px',objectFit:'cover'}} /></span>
                </Link>
            </div>
            <div className="center">
                <ul>
                     <p className="title">MAIN</p>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <li>
                        <span><DashboardOutlinedIcon className="icon"/> Dashboard</span>
                    </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/users" className="theLink">
                    <li>
                        <span><PersonIcon className="icon"/>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" className="theLink">
                    <li>
                        <span><ProductionQuantityLimitsIcon className="icon"/>Products</span>
                    </li>
                    </Link>
                    <Link to="/users" className="theLink">
                    <li>
                        <span><ChecklistOutlinedIcon className="icon"/>Orders</span>
                    </li>
                    </Link>
                    <Link to="/users" className="theLink">
                    <li>
                        <span><LocalShippingOutlinedIcon className="icon"/>Delivery</span>
                    </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <li>
                        <span><AutorenewOutlinedIcon className="icon"/>Status</span>
                    </li>
                    <li>
                        <span><EditNotificationsOutlinedIcon className="icon"/>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <span><SystemSecurityUpdateGoodOutlinedIcon className="icon"/>System Health</span>
                    </li>
                    <li>
                        <span><PsychologyOutlinedIcon className="icon"/>Logs</span>
                    </li>
                    <li>
                        <span><SettingsOutlinedIcon className="icon"/>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <span><AccountCircleIcon className="icon"/>Profile</span>
                    </li>
                    <li>
                        <span><LogoutIcon className="icon"/>Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
        </div>
    )
}
export default Sidebar