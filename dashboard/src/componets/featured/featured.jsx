import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";
const Featured = ()=>{
    const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setValue(v => (v >= 70 ? 70 : v + 3)), 100);
    return () => clearInterval(id);
  }, []);
  return(
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon style={{fontSize:"19px"}}/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                 <CircularProgressbar
                    value ={value}
                    text={`${value}%`}
                    styles={buildStyles({
                    textSize: '18px',
                    pathColor: `rgba(62, 152, 199, ${70 / 100})`,
                    textColor: '#3e98c7',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#f8f8f8',
                  })}/>
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transactions processing. Last payments may not be included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle ">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult postive ">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult postive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Featured;