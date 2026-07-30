import axios from "axios";
import Orders from "../models/orders.js";
import OrderItem from "../models/orderItem.js";
import 'dotenv/config'
import Payment from "../models/payment.js";
export const initializePayment = async (req, res, next)=>{
    const {orderId} = req.body;
    console.log(`ùserId : ${orderId}`);
    const tx_ref = `ORDER-${orderId}-${Date.now()}`;
    console.log(`tx_ref : ${tx_ref}`);
    try {
      const OrdersInfo = await Orders.findOne({
         where:{
            id:orderId
         },
         include:{
            model: OrderItem,
         }
      });
    console.log(`OrdersInfo : ${OrdersInfo}`);
      if(!OrdersInfo) return ;
      const { data } = await axios.post(
            "https://api.chapa.co/v1/transaction/initialize",
            {
                amount:OrdersInfo?.total,
                currency: "ETB",
                tx_ref:tx_ref,
                callback_url: "http://localhost:8080/api/payment/webhook",
                return_url: `http://localhost:5173/payment-success?tx_ref=${tx_ref}`,                customization: {
                    title: "Angla Burger",
                    description: "Food Order"
                }
            },
            {
               headers: {
                    Authorization: `Bearer ${process.env.TEST_SECRATE_KEY}`,
                    "Content-Type": "application/json"
               }
            }
        );
        console.log(`chapa data : ${data}`);
        const payment = await Payment.create({
         orderId,
         provider:'chapa',
         transactionId:tx_ref,
         amount:OrdersInfo?.total
        })
        console.log(`payment data : ${payment}`);
      res.status(201).json(data)
    } catch (err) {
      console.log(err.response?.data || err.message);
      res.status(500).json(err.response?.data || err.message);
    }

}

export const verifyPayment = async (req, res) => {
    const { tx_ref } = req.params;
    try {
        const { data } = await axios.get(
            `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.TEST_SECRATE_KEY}`,
                },
            }
        );
        if(data.status === "success" &&
           data.data.status === "success"){
             const payment = await Payment.findOne({
                where: {
                    transactionId: tx_ref
                }
            });
            await payment.update({
                status: "paid"
            });

            await Orders.update(
                {
                    paymentStatus: "paid"
                },
                {
                    where: {
                        id: payment.orderId
                    }
                }
            );
        };
        const payment = await Payment.findOne({
                where: {
                    transactionId: tx_ref
                }
            });        
        return res.status(200).json({
            data:data,
            orderId:payment.orderId});
    } catch (err) {
        console.log('error',err.response?.data);
        return res.sendStatus(500);
    }
};
/**
 * import axios from "axios";

export const initializePayment = async (req, res) => {
    try {
        const { orderId, amount, email } = req.body;

        const tx_ref = `ORDER-${orderId}-${Date.now()}`;

        const { data } = await axios.post(
            "https://api.chapa.co/v1/transaction/initialize",
            {
                amount,
                currency: "ETB",
                email,
                tx_ref,
                callback_url: "http://localhost:8080/api/payment/webhook",
                return_url: "http://localhost:5173/payment-success",
                customization: {
                    title: "Angla Burger",
                    description: "Food Order"
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json(data);

    } catch (err) {
        console.log(err.response?.data || err.message);
        res.status(500).json(err.response?.data || err.message);
    }
};
 * React
   |
   | POST /create-order
   |
Express
   |
   | Save order -> pending
   |
   | Generate Telebirr payment request
   |
Telebirr
   |
   | payment_url
   |
Express
   |
   | send payment_url back
   |
React
   |
window.location = payment_url
   |
User pays
   |
Telebirr callback
   |
Express verifies payment
   |
Update order -> paid
 */