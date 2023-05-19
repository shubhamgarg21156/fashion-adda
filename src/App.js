import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import Hero from './containers/Hero';
import { useState } from 'react';
import Cart from './containers/Cart';

function App() {

  //variable to store whether to show cart or not.
  const [isCart,setIsCart] = useState(false);

  return (
    <div className="App" style={ {position:"relative"}}>
      <Router>
          <div className="page">
              <Navbar setIsCart={setIsCart} isCart={isCart}/>
              {!isCart && <>
                <Hero />
                <ProductListing />
              </>}
              
              {isCart && <>
                <Cart />
              </>
              }
          </div>
      </Router>
    </div>
  );
}

export default App;
