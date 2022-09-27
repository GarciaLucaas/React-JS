import React from "react"
import { useState,useEffect } from "react"
import {customFetch} from "../utils/customFetch"
import ItemDetail from "../components/ItemDetail"
import productos from "../utils/productos"
import {useParams} from'react-router-dom';
import {db} from '../utils/firebaseConfig'
import {collection, getDocs } from "firebase/firestore";

const ItemDetailContainer= () =>{
    const [details,setDetails] = useState({})
    const {id}= useParams()
    useEffect(async()=>{
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFiresotre = querySnapshot.docs.map(item => ({id: item.id, ...item.data()}))
        setDetails(dataFromFiresotre)
    },[id]);
    useEffect(()=>{
        return(()=>{
            setDetails([])
        })
    },[]);












    return (
        <div>
            <ItemDetail item ={details}/>
        </div>
    )


}

export default ItemDetailContainer;