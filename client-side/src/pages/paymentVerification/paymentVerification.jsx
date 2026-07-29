import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function PaymentSuccess() {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const verify = async () => {
            const tx_ref = searchParams.get("tx_ref");

            if (!tx_ref) return;

            const res = await axios.get(
                `http://localhost:8080/api/payment/verify/${tx_ref}`
            );

            console.log(res);
            if(res.data === 'ok') return
        };

        verify();
    }, []);

    return <h1>Verifying Payment...</h1>;
}