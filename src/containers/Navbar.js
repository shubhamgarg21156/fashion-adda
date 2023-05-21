import React from "react";
import '../css/Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";

const Navbar = ({setIsCart}) => {

    const products = useSelector((state) => state.cartProducts.products);

    const handleCartClick = () => {
        setIsCart(true);
    }

    return(
        <nav className="Navbar">
            <div className="Navbar-content">
                <h2>Fashion Adda</h2>
                <div className="cart-items-number">
                    <ShoppingCartIcon onClick={handleCartClick} />
                    {products.length > 0 && <span>{products.length}</span>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;