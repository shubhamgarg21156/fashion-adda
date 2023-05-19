import React, { useState } from "react";
import "../css/ProductCard.css";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions/CartActions";

const ProductComponent = (props) => {
    const {title,image,price,category} = props.product;

    const changeBodyCSS = () => {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
    }

    const [isOpen,setIsOpen] = useState(false);

    const [msg,setMsg] = useState("");
    const cartProducts = useSelector((state) => state.cartProducts.products);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if(cartProducts.filter(o => o.id === props.product.id).length === 0){
            dispatch(addProduct(props.product));
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

    return(
        <>
            <div className="product-card">
                <div className="product-card-image"><img src={image} alt="item"></img></div>
                <div className="product-card-details">
                    <div className="product-card-details-title">{title}</div>
                    <div className="product-card-details-price">${price}</div>
                    <div className="product-card-details-category">{category}</div>
                    <div>{msg}</div>
                    <div className="product-card-buttons">
                        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="details" onClick={() => {setIsOpen(true); changeBodyCSS()}}>Show Details</button>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} product={props.product}  setIsOpen={setIsOpen}/>
        </>
    );
}

export default ProductComponent;