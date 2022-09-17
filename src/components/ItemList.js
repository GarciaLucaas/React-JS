import React from "react";
import Item from "./Item";



const ItemList =({listaproduc})=>{
    console.log(listaproduc);
    return(
        <>
            {listaproduc.map((item)=>{
                <Item    
                key = {item.id}
                id = {item.id}
                title = {item.title}
                precio = {item.precio}
                description = {item.description}
                img = {item.img}
                />
            })
            }
        </>
    )
}
export default ItemList;