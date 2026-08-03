import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import pc from "../../assets/pc.jpg";
import pc2 from "../../assets/pc2.jpg";

const Tables = ()=>{
    const row = [
        {
            id:1,
            product:"Acer Nitro 5",
            img:pc,
            custromer:"jhon smith",
            date:"1 March",
            amount:785,
            method:"Cash on delivery",
            status:"Approved"
        },
        {
            id:2,
            product:"Playstation 4",
            img:pc2,
            custromer:"sam smith",
            date:"1 may",
            amount:679,
            method:"mobile banking transaction on delivery",
            status:"pending"
        }
    ]
 return(
    <div className="table">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">Custromer</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell >Method</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell align="right">
                <div className="cellWrapper">
                 <img src={row.img} alt="" className="images" />
                 {row.product}
                </div>
                
                </TableCell>
              <TableCell align="right">{row.custromer}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell >{row.method}</TableCell>
              <TableCell >
                <span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
 )
}
export default Tables;