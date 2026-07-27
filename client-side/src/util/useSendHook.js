import { useEffect, useState } from "react";
import axios from "axios";

const useSend = (url,rawData) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url || !rawData) return console.log('empty request');
        

        const sendData = async () => {
            setLoading(true);

            try {
                const { data } = await axios.post(url,rawData);
                setData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        sendData();
    }, [url]);

    return { data, loading, error };
};

export default useSend;