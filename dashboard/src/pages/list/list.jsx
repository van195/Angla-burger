
import "./list.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import DataTable from "../../componets/dataTable/dataTable.jsx";
import ChoseProduct from "../choseProduct/choseProduct.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFoodContext } from "../../context/foodListContext.jsx";


const List = ()=>{
    const {activated, setActivated}= useFoodContext();
    const [data , setDate] = useState(null);
    const [error , setError] = useState(null);
    const [activatedNewList,setActivatedNewList] = useState(null)
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
        newList();
    },[]);
     const newList =()=>{
            const activatedList = data?.find((items)=>{
             return items.name === activated;
            });
            setActivatedNewList(activatedList?.products)
        }
    console.log(data);
    console.log(activatedNewList);
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                 <Navbar/>
                 <ChoseProduct/>
                 <DataTable
                  data={activatedNewList}
                 />

            </div>
        </div>
    )
}
export default List;