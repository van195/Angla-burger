import "./hotelList.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import axios from "axios";



const   ProductList = ()=>{
  const [datas ,setData]=useState(null);
    const [error, setError]=useState(null);
  useEffect(()=>{
    const listUsers= async()=>{
      try {
        const res = await axios.get(`http://localhost:3000/hotels/forAdimn`);
          setData(res.data)
      } catch (error) {
        setError(error);
      }
    }
     
    listUsers();
  },[])
     
  console.log(datas)
  
     const columns = [
  { field: 'id', headerName: 'Prduct ID', width: 70 },
  { field: 'name', headerName: 'Items', width: 130 },
  { field: 'price', headerName: 'Price', type:"number", width: 90 },
  { field: 'type', headerName: 'Type', width: 90,},
  { field: 'city', headerName: 'City', width: 90,},
  { field: 'address', headerName: 'Address', width: 90,},
  { field: 'distance', headerName: 'Distance', width: 90,},
  { field: 'photos', headerName: 'Photos', width: 90,},
  { field: 'rating', headerName: 'Rating', width: 90,},
  { field: 'status', headerName: 'Status',  width: 120, 
    renderCell:(params)=>{
      return (
        <div className={`cellWithStatus ${params.row?.status}`}>
           {params.row?.status}
        </div>
      )
    },
     align:"center"},
];
const actionColumn = [
  {
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=>{
      return (
        <div className="cellAction">
          <Link to={`/hotels/${params.row.id}`} style={{textDecoration:"none"}}>
          <div className="viewButton">
             View
          </div>
          </Link>
          <div className="deleteButton">
            Delete
          </div>
        </div>
      );
    },
  },
];



const paginationModel = { page: 0, pageSize: 9 };
    return(
        <div className="hotellist">
            <Sidebar/>
            <div className="hotellistproductlistContainer">
                 <Navbar/>
                 <div className="hotellistListContailnerTitle">
                        New Hotels
                        <Link to="/hotels/new" style={{textDecoration:"none",color: "#8e8c8cff",border:"1px solid #bdbbbbb3" ,padding:5 ,display: "flex",alignItems: "center",borderRadius:4}}>
                        <AddIcon/>Add New
                        </Link>
            </div>
               <Paper sx={{ height: 550, width: '100%',paddingLeft:3 }}>
                    <DataGrid
                        rows={datas}
                        columns={columns.concat(actionColumn)}
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
export default ProductList;