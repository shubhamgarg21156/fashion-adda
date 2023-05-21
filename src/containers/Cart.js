import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import CloseIcon from '@mui/icons-material/Close';
import "../css/Cart.css";

const Cart = ({setIsCart}) => {

    const products = useSelector((state) => state.cartProducts.products); //products fetched from redux store.

    let total_amount = 0; //total amount of all cart products

    //function to calculate the total amount
    const calc_total = () => {
        for(let p in products){
            let product = products[p];
            total_amount+=(product.quantity * product.price)
        }
        total_amount = total_amount.toFixed(2);
    }

    calc_total(); 

    const CloseCart = () => {
        document.getElementsByClassName("cart")[0].classList.add("cart-close");
        setTimeout(()=>{
            setIsCart(false);
        },200);
    }

    return(
        <div className='cart-wrapper'>
            <div className='op-layer' onClick={CloseCart}></div> {/* opaque layer */}
            <div className='cart'>
                <div className='heading'>
                    <h1>Shopping cart</h1>
                    <CloseIcon onClick={CloseCart}/>
                </div>
                {products.length === 0 && <h1>Cart is Empty</h1>}
                {products.length > 0 && 
                <div className='cart-items'>
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
        </div>
  )
}

export default Cart