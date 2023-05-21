import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const response1 = await axios.get("https://fakestoreapi.com/products/category/women's clothing")
                                    .catch((err)=>{
                                        console.log("Fetching Error: ",err);
                                    });
            const response2 = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
                                    .catch((err)=>{
                                        console.log("Fetching Error: ",err);
                                });    
            const response = [...response1.data,...response2.data]
            
            dispatch(setProducts(response));
        }
        
        fetchProducts();
    },[dispatch]);

    return(
        <div className="products">  
            {/* {console.log(products)}   */}
           {products.map((product,index) => {
                return <ProductComponent product = {product} key={index}/>
           })}
        </div>
    );
}

export default ProductListing;