import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import verifying from '../../assets/CreditCardPayment.mp4'
export default function PaymentSuccess() {
    const API_URL = import.meta.env.VITE_API_URL;
    const [searchParams] = useSearchParams();
    const navigation = useNavigate()
    useEffect(() => {
        const verify = async () => {
            const tx_ref = searchParams.get("tx_ref");
            if (!tx_ref) return;
            const res = await axios.get(
                `${API_URL}L/api/payment/verify/${tx_ref}`
            );            
            if(res?.data.data.status === "success" && res?.status === 200) {
             return navigation(`/trackingOrder/${res?.data.orderId}`)
            }
           
        };

        verify();
    }, []);

    return (
        <div className="paymentVerification" style={{overflowX:'hidden',width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <video autoPlay loop muted playsInline style={{width:'500px',height:'500px'}}>
             <source src={verifying} type="video/mp4" />
            </video>
            <h1 style={{fontFamily:'monospace',marginTop:'-20px'}}>
                Processing your payment...
            </h1>
            <p style={{fontFamily:'monospace', width:'300px',color:'#393838dd', fontSize:'14px',marginTop:'-10px',paddingBottom:'30px'}}>
                Please don't close this page.
                We're confirming your payment with Chapa.
                This usually takes a few seconds.
            </p>
        </div>
    );
}