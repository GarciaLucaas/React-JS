import React from "react";
import Item from "./Item";



const ItemList =({listaproduc})=>{
   
    return(
        <>
            {listaproduc.map((item)=>{ return(
                        <Item    
                            key = {item.id}
                            id = {item.id}
                            title = {item.title}
                            precio = {item.precio}
                            description = {item.description}
                            img = {item.img}
                        />
                    )
                })
            }
        </>
    )
}
export default ItemList;