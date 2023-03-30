import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
// import Product from "./products";
import ProductDetails from "./products";

export function App(props) {
  return (
    <div>
      <BrowserRouter>

      {/* <Route path="product" element={<Product/>}/> */}
      <Route path="productDetails" element={<ProductDetails/>}/>
      
      </BrowserRouter>

    </div>
  )
}
