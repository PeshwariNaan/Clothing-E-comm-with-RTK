import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

//import SHOP_DATA from '../shop-data.js'

//as the actual value you want to access
export const ProductsContext = createContext({
    products: [],
    //setProducts: () => PRODUCTS,
  });
  
  // this is the provider which is the actual component - this is a wrapper that will wrap the components that we want to access
  export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    //This was only used once but we don't want that to happen every time
    //No need to populate the data base more than once - keep code for demonstration purposes
    // useEffect(() => {
    //   addCollectionAndDocuments('categories', SHOP_DATA)
    
      
    // }, [])
    

    const value = { products };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};