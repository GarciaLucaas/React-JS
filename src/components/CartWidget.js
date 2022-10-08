import React, { useContext } from"react";
import { AiFillShopping } from "react-icons/ai";
import { CartContext } from "./CartContext";



function CartWidget(){
    const ctx = useContext(CartContext)
    return(
        <div>
            <span> {ctx.cantItem()|| ''}</span>
            <AiFillShopping />
            
            
        </div>
    )
}
export default CartWidget