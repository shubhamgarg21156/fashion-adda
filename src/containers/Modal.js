import React, { useState } from 'react'
import ReactDom from 'react-dom';
import '../css/Modal.css';
import { addProduct } from '../redux/actions/CartActions';
import { useDispatch, useSelector } from 'react-redux';

export default function Modal({open,product,setIsOpen}) {

    const changeBodyCSS = () => {
        document.body.style.height = "unset";
        document.body.style.overflow = "unset";
    }

    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cartProducts.products);

    const [msg,setMsg] = useState("");

    if(!open)return null;
    const {title,image,price,category} = product;

    const handleAddToCart = () => {
        if(cartProducts.filter(o => o.id === product.id).length === 0){
            dispatch(addProduct(product));
            setMsg("Item Added to Cart");
            setTimeout(() => {
                setMsg("");
            },3000);
        }
        else{    
            setMsg("Item Already in Cart");
            alert("Item already in cart")
            setTimeout(() => {
                setMsg("");
            },3000);
        }
    }

  return ReactDom.createPortal(
    <>
        <div className='modal-overlay' onClick={() => {setIsOpen(false); changeBodyCSS()}}></div>
        <div className="product-card modal-card" >
            <div className="product-card-image"><img src={image} alt="item"></img></div>
            <div className="product-card-details">
                <div className="product-card-details-title">{title}</div>
                <div className="product-card-details-price">${price}</div>
                <div className="product-card-details-category">{category}</div>
                <div>{msg}</div>
                <div className="product-card-buttons">
                        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>        
        </div>
    </>,
    document.getElementById('portal')
  )
}
