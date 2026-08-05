import "./home.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import Widget from "../../componets/widget/widget.jsx";
import Featured from "../../componets/featured/featured.jsx";
import Chart from "../../componets/chart/chart.jsx";
import Tables from "../../componets/TABLE/table.jsx";
import axios from 'axios'
import { useEffect, useState } from "react";
const Home = ()=>{
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetch = async()=>{
            try {
                const { data } = await axios.get(
                  "http://localhost:8080/api/users/dashboard-stats"
                );
                setData(data)
            } catch (error) {
                console.log(error); 
                setError(error)
            }
        }
        fetch();
    },[])
    console.log(data);
    console.log(error);
    
    return(
        <div className="home">
            <Sidebar/>
            <div className="homeContaner">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user" rowData={data?.users}/>
                    <Widget type="order" rowData={data?.orders}/>
                    <Widget type="earning" rowData={data?.earnings}/>
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
                </div>
                
            </div>
        </div>
    )
}
export default Home;