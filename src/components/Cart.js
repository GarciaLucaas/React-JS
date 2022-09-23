import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
const Cart = ()=>{
   const ctx = useContext(CartContext)
    return(
        <>
            <h1>CART</h1>
            {
                ctx.cartList.map(item => <li>{item.title} Cantidad:{item.qty}<button onClick={()=>ctx.removeItem(item.id)}>Eliminar este producto</button></li>)
            }
            <button onClick={ctx.clear}>Eliminar</button>
            <Link to='/'> Volver</Link>
        </>
    )
}

export default Cart;