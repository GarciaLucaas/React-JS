import React from "react";
import ItemCount from "../components/ItemCount"



const ItemDetail =({item}) => {

    return(
        <>
        <div className="card mb-3">
            <img src={item.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.precio}</p>
                <p className="card-text"><small className="text-muted">{item.description}</small></p>
            </div>
            <ItemCount initial = {1} stock={5}/>
        </div>
        
        </>
    )
}

export default ItemDetail;