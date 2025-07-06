import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { products } from "../assets/Asset";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Shopcontext = createContext();

const Shopcontextprovider = (props) => {
    const currency = '$';
    const delivery_charge = 10;
    const[search,setsearch]=useState('')
    const[showsearch,setshowsearch]=useState(false)
    const [cartitems,setcartitems]=useState({})
    const navigate=useNavigate()

    const addtocart=async(itemId,size)=>{
        if(!size){
            toast.error('select your size')
            return
        }
        let cartdata =structuredClone(cartitems)

        if(cartdata[itemId]){
            if(cartdata[itemId][size]){
                cartdata[itemId][size] +=1
            }
            else{
                cartdata[itemId][size] =1
            }
        }
        else{
            cartdata[itemId]={}
            cartdata[itemId][size]=1
        }
     
        setcartitems(cartdata)
    }
   
  const getcartcount = () => {
  let totalcount = 0;
  for (const itemId in cartitems) {
    for (const size in cartitems[itemId]) {
      if (cartitems[itemId][size] > 0) {
        totalcount += cartitems[itemId][size];
      }
    }
  }
  return totalcount;
};
const updatequantity=async(itemId,size,quantity)=>{
    let cartdata= structuredClone(cartitems)
    cartdata[itemId][size]=quantity
    setcartitems(cartdata)
}
const getCartAmount = () => {
  let totalAmount = 0;

  for (const items in cartitems) {
    let itemInfo = products.find((product) => product._id === items);
    
    for (const item in cartitems[items]) {
      try {
        if (cartitems[items][item] > 0) {
          totalAmount += itemInfo.price * cartitems[items][item];
        }
      } catch (error) {
        // Optional: Log or handle error
      }
    }
  }

  return totalAmount;
};


    const value = {
        products,
        currency,
        delivery_charge,
        search,setsearch,showsearch,setshowsearch,cartitems,
        addtocart,getcartcount,updatequantity,getCartAmount,navigate
    };

    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    );
};

export default Shopcontextprovider;
export { Shopcontext };
