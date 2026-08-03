import "./home.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import Widget from "../../componets/widget/widget.jsx";
import Featured from "../../componets/featured/featured.jsx";
import Chart from "../../componets/chart/chart.jsx";
import Tables from "../../componets/TABLE/table.jsx";
const Home = ()=>{
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContaner">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest transactions
                    </div>
                    <Tables/>
                </div>
                
            </div>
        </div>
    )
}
export default Home;