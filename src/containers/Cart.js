import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import "../css/CartItem.css";

const Cart = () => {

    const products = useSelector((state) => state.cartProducts.products);

    let total_amount = 0;

    const calc_total = () => {
        for(let p in products){
            let product = products[p];
            total_amount+=(product.quantity * product.price)
        }
        total_amount = total_amount.toFixed(2);
    }

    calc_total();
    return(
    <div className='cart'>
        {products.length === 0 && <h1>Cart is Empty</h1>}
        {products.length > 0 && 
        <div>
            {  products.map((product,index) => {
                    return(<CartItem product={product} key={index}/>)
                })
            }
            <div className='total_price_cart'>
                <h1>Total : ${total_amount}</h1>
            </div>
        </div>
        }
    </div>
  )
}

export default Cart