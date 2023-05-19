import React from "react";
import '../css/Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";

const Navbar = ({isCart,setIsCart}) => {

    const products = useSelector((state) => state.cartProducts.products);

    const handleCartClick = () => {
        setIsCart(true);
    }

    const handleClose = () => {
        setIsCart(false);
    }

    return(
        <nav className="Navbar">
            <div className="Navbar-content">
                {isCart && <CloseIcon onClick={handleClose} style={ {marginLeft:"20px"}}/>}
                <h2>Fashion Adda</h2>
                {!isCart && <div className="cart-items-number">
                    <ShoppingCartIcon onClick={handleCartClick} />
                    {products.length > 0 && <span>{products.length}</span>}
                </div>}
            </div>
        </nav>
    );
}

export default Navbar;