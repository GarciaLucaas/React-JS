import React from "react"
import { useState,useEffect } from "react"
import ItemDetail from "../components/ItemDetail"
import {useParams} from'react-router-dom';
import {db} from '../utils/firebaseConfig'
import { getDoc,doc } from "firebase/firestore";
import Item from "../components/Item";

const ItemDetailContainer= () =>{
    const [loading,setLoading] = useState(true)
    const [details,setDetails] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const fetch = async () => {
            const docRef = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);
            setDetails(docSnap.data())
            setLoading(false)
        }
        fetch()
        }, [id]);
    return (
        <div>
           {loading ? <Item/> : <ItemDetail item ={details}/>}
        </div>
    )


}

export default ItemDetailContainer;