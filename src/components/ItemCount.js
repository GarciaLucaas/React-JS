import React, { useState } from "react";


const ItemCount =({initial, stock, onAdd}) =>{
    const [contador, setContador]= useState(initial);
    const sumar = () =>{
        if(contador < stock){
            setContador(contador + 1);
        }    
    };
    const restar = () =>{
        if (contador > initial){
        setContador(contador - 1);}
    };
    const agregarCarrito = () =>{
        setContador(contador);
        onAdd(contador)
    };
    return(
        <div>
            <button onClick={()=> sumar()} type="button" className="btn btn-outline-success"> + </button>
        
            <span> {contador} </span>
        
            <button onClick={()=> restar()} type="button" className="btn btn-outline-success"> - </button>
            <button onClick={()=> agregarCarrito()} type="button" className="btn btn-outline-primary">Agregar al carrito</button>
                    
        </div>
    )
}
export default ItemCount; 