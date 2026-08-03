import { useState } from "react";
import Navbar from "../../componets/navbar/navbar.jsx";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import noImage from "../../assets/no-image-icon-0.jpg";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import "./new.scss";
import axios from "axios";

const New = ({inputs,title})=>{
    const [file, setFile] = useState();
    const[hotel, setHotel] = useState(false)
    const[packedData ,setPackedData] = useState({});
    const[popupmessage , setPopupmessage] = useState(null)
    const[errorHandler, setErrorHandler]=useState(null)
    const sendPicture = async () => {
     try {
         const formData = new FormData();
         for(let i=0; i<= file.length;i++){
            formData.append("file",file[i]);
         }
         ;//create formdata
        // now we gonna send folder e
        const res = await axios.post("http://localhost:3000/upload",formData,
          {headers: {"Content-Type":"multipart/form-data"}});
         return res.data;
       }
       catch (err) {
         console.log(err);
       }
     };
     

    const handleChange = e => {
        if(title === "Add New Hotel"){
            setHotel(true)
     }
      setPackedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
     };

    const handleClick= async()=>{
        if(title === "Add New Car"){
            try {
                let imgUrl = "";
                if (file) imgUrl = await sendPicture();
                const dataToSend = {...packedData,image:imgUrl};
                 const res = await axios.post("http://localhost:3000/cars",dataToSend);
                  setPopupmessage(res);
                  setPackedData("");
            } catch (error) {
                setErrorHandler(error);
            }
           
        }else if(title === "Add New Hotel"){
                
            try {
                let imgUrl = "";
                if (file) imgUrl = await sendPicture();
                const dataToSend = {...packedData,image: imgUrl};
               const res = await axios.post("http://localhost:3000/hotels",dataToSend);
               setPopupmessage(res.data);
               setPackedData("");
               setHotel(false)
            } catch (error) {
                setErrorHandler(error);
            }
        }else{
            try {
                let imgUrl = "";
                if (file) imgUrl = await sendPicture();
                const dataToSend = {...packedData,image: imgUrl};
                const res = await axios.post("http://localhost:3000/auth/register",dataToSend);
                setPopupmessage(res.data);
                setPackedData("");
                
            } catch (error) {
                setErrorHandler(error);
            }
        }
         
    }
    console.log(file)
    console.log(errorHandler);
    console.log(popupmessage);
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                         <img src={noImage} alt="" />
                    </div>
                    <div className="right">
                       <form>
                        <div className="formInput">
                            <label htmlFor="file" >Upload Picture : <PhotoCameraOutlinedIcon className="icon"/></label>
                            <input type="file" multiple id="file" onChange={(e)=>{setFile(e.target.files)}} style={{display:"none"}}/>
                           {hotel && <p>Hold Ctrl/Cmd + click to chose multiple pictures</p>}
                         </div>
                         {inputs.map((inputs)=>(
                            <div className="formInput" key={inputs.id}>
                                <label>{inputs.label}</label>
                                <input type={inputs.type} onChange={handleChange} name={inputs.name} placeholder={inputs.paceholdre} />
                            </div>
                         ))
                        }
                       </form>
                        <button onClick={handleClick} className="joinButton">Join Now!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New;