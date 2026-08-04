import "./orderList.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import axios from "axios";
import { actionColumnsOrders, columnsOrders } from "../../util/container.jsx";



const   OrderList = ()=>{
  const [data ,setData]=useState(null);
    const [error, setError]=useState(null);
  useEffect(()=>{
    const listUsers= async()=>{
      try {
        const res = await axios.get(`http://localhost:8080/api/order/getAllOrders`);
          setData(res.data)
      } catch (error) {
        setError(error);
      }
    }
     
    listUsers();
  },[])
     
  console.log(data)
const paginationModel = { page: 0, pageSize: 9 };
    return(
        <div className="hotellist">
            <Sidebar/>
            <div className="hotellistproductlistContainer">
                 <Navbar/>
               <Paper sx={{ height: 550, width: '100%',paddingLeft:3 }}>
                    <DataGrid
                        rows={data}
                        columns={columnsOrders.concat(actionColumnsOrders)}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
        </div>
    )
}
export default  OrderList