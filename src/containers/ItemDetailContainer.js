import React from "react"
import { useState,useEffect } from "react"
import {customFetch} from "../utils/customFetch"
import ItemDetail from "../components/ItemDetail"
import productos from "../utils/productos"

const ItemDetailContainer= () =>{
    const [details,setDetails] = useState({})
    useEffect(()=>{
        customFetch(productos)
            .then(data => setDetails(data[1]))
            .catch(err => console.log(err))
    
    },[])
    
    return (
        <div>
            <ItemDetail item ={details}/>
        </div>
    )


}

export default ItemDetailContainer;