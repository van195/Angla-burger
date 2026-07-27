import Product from "../models/Product.js";

export const getSubtotalBill = async (foodList) => {
    let total = 0;

    if (!foodList || foodList.length === 0) return 0;

    for (const item of foodList) {
        const productFromDb = await Product.findByPk(item.id);

        if (!productFromDb) {
            throw new Error(`Product ${item.id} not found`);
        }

        total += Number(productFromDb.price) * item.quantity;
    }

    return total;
};
export function getTaxBill (total){
        let tax = 0;
      if(!total) return;
       tax += total * 0.15;
      return tax;
    }
export function getTotalBill (subtotal,tax,delivery,discount){
        let total = 0;
      if(!subtotal) return;
       total += subtotal + tax + delivery + discount ;
      return total;
    }
