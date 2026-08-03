import "./userList.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import { actionColumn, actionColumnUser, columns, columnsUser } from "../../util/container.jsx";
import axios from "axios";
const UserList = ()=>{
  const [data , setDate] = useState(null);
    const [error , setError] = useState(null);
    useEffect(()=>{
        const fetchData =async()=>{
            try {
                const fetch = await axios.get('http://localhost:8080/api/users/get-all-Users')
                setDate(fetch.data)
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    },[]);
    console.log(data);
    
//const rows = [
//  { id: 1, items: 'Snow@gmail.com', price: 'Jon', type: 35 , city:"active",address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active"},
//  { id: 2, items: 'Lannister@gmail.com', price: 'Cersei', type: 42,city:"active",address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active" },
//  { id: 3, items: 'Lannister@gmail.com', price: 'Jaime', type: 45 ,city:"pending",address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active"},
//  { id: 4, items: 'Stark@gmail.com', price: 'Arya', type: 16,city:"active" ,address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active"},
//  { id: 5, items: 'Targaryen@gmail.com', price: 'Daenerys', type: null ,city:"pending",address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active"},
//  { id: 6, items: 'Melisandre@gmail.com', price: null, type: 150,city:"pending" ,address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active"},
//  { id: 7, items: 'Clifford@gmail.com', price: 'Ferrara', type: 44,city:"active" ,address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active"},
//  { id: 8, items: 'Frances@gmail.com', price: 'Rossini', type: 36,city:"pending",address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"" ,currentStatus:"active"},
//  { id: 9, items: 'Roxie@gmail.com', price: 'Harvey', type: 65 ,city:"active",address: 35 , distance:"active",photos: 35 , rating:"active",cheapestPrice:"",currentStatus:"active"},
//];

const paginationModel = { page: 0, pageSize: 9 };
    return(
        <div className="carproductlist">
            <Sidebar/>
            <div className="carproductlistContainer">
                 <Navbar/>
                 <div className="carListContailnerTitle">
                        New user
                        <Link to="/users/new" style={{textDecoration:"none",color: "#8e8c8cff",border:"1px solid #cccbcbff" ,padding:5 ,display: "flex",alignItems: "center",borderRadius:4}}>
                        <AddIcon/>Add New 
                        </Link>
            </div>
               <Paper sx={{ height: 550, width: '95%', paddingLeft:3}}>
                    <DataGrid
                        rows={data && data}
                        columns={columnsUser.concat(actionColumnUser)}
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
export default UserList;