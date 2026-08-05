
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
    },[]);
    const newList =(categoryName)=>{
            setActivated(categoryName);
            const category = data.find(
             item => item.name === categoryName
            );
        setActivatedNewList(category?.products || []);
    }
    useEffect(()=>{
        if (!data?.length) return;
        newList(activated);
    },[data,activated]);
    
    console.log(data);
    console.log(activated);
    console.log(activatedNewList);
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                 <Navbar/>
                 <ChoseProduct rowData={data}/>
                 <DataTable
                  data={activatedNewList}
                 />

            </div>
        </div>
    )
}
export default List;