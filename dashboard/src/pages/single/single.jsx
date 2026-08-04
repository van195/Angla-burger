import "./single.scss";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import Navbar from "../../componets/navbar/navbar.jsx";
import man from "../../assets/flat-illustration-in-grayscale-avatar-user-profile-person-icon-anonymous-profile-profile-picture-for-social-media-profiles-icons-screensaver-free-vector.jpg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import pc from "../../assets/pc.jpg";
import pc2 from "../../assets/pc2.jpg";
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { data } from "../../util/arrayContainer.js";

const Single = ({type})=>{
 const location= useLocation()
 const id = location.pathname.split("/")[2];
 const [userDetail,setUserDetail] = useState(null);
 const [error, setError]=useState(null);
 
      
useEffect(()=>{
  if(type === 'user'){
      const listUsers= async()=>{
        try {
          const res = await axios.get(`http://localhost:8080/api/users/get-single-Users/${id}`);
            setUserDetail(res.data)
        } catch (error) {
          setError(error);
        }
      }
      listUsers();
  }
  if(type === 'product'){
      const listUsers= async()=>{
        try {
          const res = await axios.get(`http://localhost:8080/api/product/withOut-SearchSingle-product/${id}`);
            setUserDetail(res.data)
        } catch (error) {
          setError(error);
        }
      }
      listUsers();
  }

},[id,type])
console.log(userDetail);
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContanier">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Inforamtion</h1>
                        
                            { type === 'user' &&
                                <div className="items">
                                    <div className="details">
                                        <h1 className="itemsTitle">{userDetail?.username}</h1>
                                        <div className="DetailItem">
                                            <span className="itemKey">Email:</span>
                                            <span className="itemValue">{userDetail?.email}</span>
                                        </div>
                                        <div className="DetailItem">
                                            <span className="itemKey">role:</span>
                                            <span className="itemValue">{userDetail?.role}</span>
                                        </div>
                                        <div className="DetailItem">
                                            <span className="itemKey">Address:</span>
                                            <span className="itemValue">{userDetail?.address}</span>
                                        </div>
                                        <div className="DetailItem">
                                            <span className="itemKey">Counter:</span>
                                            <span className="itemValue">{userDetail?.country}</span>
                                        </div>

                                    </div>
                                </div>
                            }
                            { type === 'product' &&
                                <div className="items">
                                    <img src={`/${userDetail?.image}`} className="itemsImg" alt="" />
                                    <div className="details">
                                        <div className="DetailItem">
                                            <span className="itemKey">Category:</span>
                                            <span className="itemValue">{userDetail?.category.name}</span>
                                        </div>
                                        <div className="DetailItem">
                                            <span className="itemKey">Name:</span>
                                            <span className="itemValue">{userDetail?.name}</span>
                                        </div>
                                        <div className="DetailItem">
                                            <span className="itemKey">Price:</span>
                                            <span className="itemValue">{userDetail?.price}</span>
                                        </div>
                                        <div className="DetailItem">
                                            <span className="itemKey">isAvailable:</span>
                                            <span className="itemValue">{userDetail?.isAvailable}</span>
                                        </div>

                                    </div>
                                </div>
                            }
                    </div>
                    <div className="right">
                    
                        <ComposedChart
                                style={{ width: '100%', maxWidth: '700px', maxHeight: '50vh', aspectRatio: 1.5 }}
                                responsive
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                }}
                                >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="name" scale="band" />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                <Scatter dataKey="cnt" fill="red" />
                        </ComposedChart>
                    </div>
                </div>
                <div className="bottomSinglePage">
                    <h1 className="title">The Entire Transaction of user</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> Tracing Id</TableCell>
                                        <TableCell align="center">item Name</TableCell>
                                        <TableCell align="right">quantity</TableCell>
                                        <TableCell align="center">price</TableCell>
                                        <TableCell >Method</TableCell>
                                        <TableCell >Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userDetail?.orders?.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell align="right">
                                                <div className="cellWrapper">
                                                {row.orderItems[0].product.name}
                                                </div>
                                                
                                            </TableCell>
                                            <TableCell align="right">{row.orderItems[0].quantity}</TableCell>
                                            <TableCell align="right">{row.orderItems[0].product.price}</TableCell>
                                            <TableCell align="right">{row.paymentMethod}</TableCell>
                                            <TableCell >{row.paymentStatus}</TableCell>
                                            <TableCell >
                                                <span className={`status ${row.status}`}>{row.status}</span></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </div>
            </div>
        </div>
    )
}
export default Single;