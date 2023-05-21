import './App.css';
import Navbar from './containers/Navbar';
import ProductListing from './containers/ProductListing';
import Hero from './containers/Hero';
import { useEffect, useState } from 'react';
import Cart from './containers/Cart';

function App() {

  //variable to store whether to show cart or not.
  const [isCart,setIsCart] = useState(false);

  //to do animation when the cart opens
  useEffect(() => {
    if(isCart){
      document.body.classList.add("cart-open");
    }else{
      document.body.classList.remove("cart-open");
    }
  },[isCart]);

  return (
    <div className="App" style={ {position:"relative"}}>
          <div className="page">
              <Navbar setIsCart={setIsCart} isCart={isCart}/>
              <Hero />
              <ProductListing />              
              {isCart && <>
                <Cart setIsCart={setIsCart} />
              </>
              }
          </div>
    </div>
  );
}

export default App;
