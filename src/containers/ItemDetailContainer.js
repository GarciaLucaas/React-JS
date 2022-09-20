import React from "react"
import { useState,useEffect } from "react"
import {customFetch} from "../utils/customFetch"
import ItemDetail from "../components/ItemDetail"
import productos from "../utils/productos"
import {useParams} from'react-router-dom';

const ItemDetailContainer= () =>{
    const [details,setDetails] = useState({})
    const {id}= useParams()
    useEffect(()=>{
        customFetch(productos.find(item => item.id == id))
            .then(data => setDetails(data))
            .catch(err => console.log(err))
    
    },[])
    
    return (
        <div>
            <ItemDetail item ={details}/>
        </div>
    )


}

export default ItemDetailContainer;