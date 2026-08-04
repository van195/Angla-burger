import "./dataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import {  useEffect, useState } from "react";
import axios from "axios";
import { actionColumn, columns, rows } from "../../util/container";


 const DataTable = ({data})=>{
  //const [datas ,setData]=useState(null);
  //const [error, setError]=useState(null);
  //useEffect(()=>{
  //  const listUsers= async()=>{
  //    try {
  //      const res = await axios.get(`http://localhost:3000/user`);
  //        setData(res.data)
  //    } catch (error) {
  //      setError(error);
  //    }
  //  }
  //  
  //  listUsers();
  //},[])
   


const paginationModel = { page: 0, pageSize: 9 };
     return(
        <div className="dataTable">
          <div className="dataTableTitle">
            New Users
            <Link to="/products/new" style={{textDecoration:"none",color: "#8e8c8cff",border:"1px solid #cccbcbff" ,padding:5 ,display: "flex",alignItems: "center",borderRadius:4}}>
              <AddIcon/>Add New
            </Link>
          </div>
               <Paper sx={{ height: 550, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns.concat(actionColumn)}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
        </div>
     )
 }
 export default DataTable;