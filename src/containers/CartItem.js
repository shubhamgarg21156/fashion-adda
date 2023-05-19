import React from 'react'
import "../css/CartItem.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, deleteProductFromCart, increaseQuantity } from "../redux/actions/CartActions"

const CartItem = ({product}) => {

  const {title,image,price,category,quantity} = product;

  const dispatch = useDispatch();

  let total = price;

  const calc_total = () => {
    const value = quantity * price;
    const roundedValue = value.toFixed(2);
    total = roundedValue;
  }

  calc_total();
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product.id));
  }

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.id));
  }

  const handleDeleteProduct = () => {
    dispatch(deleteProductFromCart(product.id));
  }
  return (
    <div className='cart-item'>
        <img className='cart-item-img' src={image} alt="item" />
        <div className='cart-item-details'>
            <h1>{title}</h1>
            <h2>{category}</h2>
            <p>${price}</p>
            <h3>Quantity : {quantity}</h3>
        </div>
        <div className='cart-item-options'>
            <AddCircleOutlineIcon onClick = {handleIncreaseQuantity}/>
            <RemoveCircleOutlineOutlinedIcon onClick = {handleDecreaseQuantity}/>
            <HighlightOffOutlinedIcon onClick={handleDeleteProduct}/>
        </div>
        <h3 className='item-price-total'>Total:${total}</h3>
    </div>
  )
}

export default CartItem