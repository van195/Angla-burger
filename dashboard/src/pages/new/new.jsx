import { useContext, useState } from "react";
import Navbar from "../../componets/navbar/navbar.jsx";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import noImage from "../../assets/no-image-icon-0.jpg";
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import "./new.scss";
import axios from "axios";
import { upload } from "@imagekit/javascript";
import { AuthContext } from "../../context/authContext.jsx";
import Loading from "../../componets/loading/loading.jsx";
import Notification from "../../componets/notifications/notifications.jsx";
const New = ({inputs,title,type})=>{
    const{ token,user, dispatch} = useContext(AuthContext);
    const [file, setFile] = useState();
    const[loading, setLoading] = useState(false)
    const[packedData ,setPackedData] = useState({});
    const[popUpMessage , setPopUpMessage] = useState(null)
    const [category, setCategory] = useState("Fries");
    const[errorHandler, setErrorHandler]=useState(null)
    const[preview, setPreview]=useState(null)

    const handleImageUpload = async (file) => {
        console.log(token,'token is found');

        try {
            // Get temporary ImageKit credentials
            if(!token) {
                return;
            }  
            const authRes = await axios.get(
                "http://localhost:8080/api/product/imagekit/auth",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(authRes.data);
            
            const {signature,expire,publicKey} = authRes.data;
            const tempoToken = authRes.data.token
            // Upload directly to ImageKit
            const result = await upload({
                file,
                fileName: file.name,
                signature,
                expire,
                publicKey,
                token:tempoToken,
                folder: "/angla-burger/products",

                useUniqueFileName: true
            });

            console.log("ImageKit result:", result);

            return result;

        } catch (error) {
            console.log(error);
        }
    };
    
    
    const handleClick = async ()=>{
        setLoading(true)
        if(!file)return;
        const imageResult = await handleImageUpload(file);
        console.log(imageResult);
        
        try {
            const res = await axios.post("http://localhost:8080/api/product/create-product",
                        {
                            name:packedData.name,
                            description:packedData.description,
                            price:packedData.price,
                            category:category,
                            image: imageResult.url
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );
                    setPopUpMessage(res.data)
        } catch (error) {
            setErrorHandler(error)
        }finally{
            setLoading(false)
        }
    }
    console.log(file)
    console.log(errorHandler);
    return(
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                {popUpMessage && <Notification type='success' title='item has been created'/>}
                {loading && <Loading />}
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                         <img src={preview ? preview : noImage} alt="" />
                    </div>
                    <div className="right">
                       <form>
                        {
                           type === 'product' ?
                           <div className="formInput">
                            <label htmlFor="file" >Upload Picture : <PhotoCameraOutlinedIcon className="icon"/></label>
                            <input type="file" multiple id="file" onChange={(e)=>{setFile(e.target.files[0]); setPreview(URL.createObjectURL(e.target.files[0]))}} style={{display:"none"}}/>
                         </div>:''}
                         {type === 'product' ? 
                            <> 
                            <select id="category" className="formInput" value={category}
                             onChange={(e) => setCategory(e.target.value)}>
                                <option value="Burger">Burger</option>
                                <option value="Shawarma">Shawarma</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Fries" selected>Fries</option>
                            </select>
                         </> :''}
                         {inputs.map((inputs)=>(
                            <div className="formInput" key={inputs.id}>
                                <label>{inputs.label}</label>
                                <input type={inputs.type} name={inputs.name} onChange={(e)=>setPackedData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}  placeholder={inputs.paceholdre} />
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
 /*const sendPicture = async () => {
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
        if(type === "product"){
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
         
    }*/