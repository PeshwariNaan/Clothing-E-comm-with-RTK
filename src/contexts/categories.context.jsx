import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getCategoriesAndDocuments } from  "../utils/firebase/firebase.utils.js"

//import SHOP_DATA from '../shop-data.js'

//as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
    //setProducts: () => PRODUCTS,
  });
  
  // this is the provider which is the actual component - this is a wrapper that will wrap the components that we want to access
  export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => { //Remember to use async inside the useEffect when calling an async function
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories')
        console.log(categoryMap)
        setCategoriesMap(categoryMap)
      }

      getCategoriesMap()  
      
    }, [])
    

    //This was only used once but we don't want this to happen every time
    //No need to populate the data base more than once - keep code for demonstration purposes
    // useEffect(() => {
    //   addCollectionAndDocuments('categories', SHOP_DATA)
    
      
    // }, [])
    

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};