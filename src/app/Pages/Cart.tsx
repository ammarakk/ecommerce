
import React from "react";
import ContactUs from "./Components/ContactUs";
import BrandSpeciality from "./Components/BrandSpeciality";
import NewCeramics from "./Components/NewCeramics";
import ProductPage from "./Components/ProductPage";



const Cart = () => {
    return (
      <div>
        <ProductPage />
        <NewCeramics/>
        <BrandSpeciality/>
        <ContactUs/>
        
      </div>
    );
  };
  
  export default Cart;