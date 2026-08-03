
import "./list.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import DataTable from "../../componets/dataTable/dataTable.jsx";
import ChoseProduct from "../choseProduct/choseProduct.jsx";
import { useEffect, useState } from "react";
import axios from "axios";


const List = ()=>{
    const [data , setDate] = useState(null);
    const [error , setError] = useState(null);
    useEffect(()=>{
        const fetchData =async()=>{
            try {
                const fetch = await axios.get('http://localhost:8080/api/category/list-category')
                setDate(fetch.data)
            } catch (error) {
                setError(error);
            }

        }
        fetchData();
    },[]);
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                 <Navbar/>
                 <ChoseProduct/>
                 <DataTable/>

            </div>
        </div>
    )
}
export default List;