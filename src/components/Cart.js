import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
const Cart = ()=>{
   const ctx = useContext(CartContext)
   
   if(ctx.cartList.length === 0){
    return(
        <>
            <h1>Carrito vacio</h1>
            <Link to='/'>Home</Link>
        </>
    )
   }

   return(
        <>
        
            {
                ctx.cartList.map(item => 
                    <div className="container m-0">
                        <div className="row">
                            <div className="col">
                                <img src={item.img} className="card-img-top tamano" alt="..."/>
                            </div>
                            <div className="col">
                                producto: {item.title} Cantidad:{item.qty} / Precio: ${item.precio} / Subtotal: ${item.qty * item.precio}
                            </div>
                            <div className="col">                           
                                <button className="btn-danger" onClick={()=>ctx.removeItem(item.id)}>Eliminar este producto</button>
                                <button className="btn-danger" onClick={()=>ctx.crearOrden()}>Comprar</button>
                            </div>
                        </div>
                    </div>)
            }
            <button onClick={ctx.clear} className="btn-danger">Eliminar Carrito</button>
            <Link to='/' className="bg-info"> Volver</Link>
        </>
    )
}

export default Cart;