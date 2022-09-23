import React from "react";
import ItemCount from "../components/ItemCount"
import {Link} from 'react-router-dom'
import { useState } from "react";
import '../App.css'
import { useContext } from "react";
import { CartContext } from "./CartContext";




const ItemDetail =({item}) => {
    const[itemCount, setItemCount] = useState(0);
    const ctx = useContext(CartContext)
    const onAdd =(qty)=>{
        alert("Usted a comprado "+ qty + "producto")
        setItemCount(qty)
        ctx.addItem(item, qty)
    }
    return(
        <>
        <div className="card mb-3">
            <img src={item.img} className="card-img-top tamano" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.precio}</p>
                <p className="card-text">Disponible :{item.stock}</p>
                <p className="card-text"><small className="text-muted">{item.description}</small></p>
            </div>
            {
                itemCount === 0  ?
                <ItemCount initial = {1} stock={item.stock} onAdd={onAdd}/>
                : <Link to='/cart'><button type="button" className="btn btn-danger">Ir Carrito</button></Link> 
            }
            
        </div>
        
        </>
    )
}

export default ItemDetail;