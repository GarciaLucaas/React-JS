import { useEffect, useState } from 'react';
import ItemList from "../components/ItemList";
import {useParams} from'react-router-dom';
import {db} from '../utils/firebaseConfig'
import {collection, getDocs, where,query } from "firebase/firestore";

const ItemListContainer =()=>{
    const [listaProduc, setListaProduc] = useState([])
    const {id} = useParams();
    const productosBd = collection(db, "productos")
    useEffect(()=>{
        if(id){
            const q = query(productosBd, where('categoryId', '==',parseInt(id)))
            getDocs(q)
            .then(result =>
                setListaProduc(result.docs.map(item => ({id: item.id, ...item.data()}))))
        } else{
           getDocs(productosBd)
            .then(result => 
                setListaProduc(result.docs.map(item => ({id: item.id, ...item.data()}))))
        }
    },[id]);

    
        return(
            <div>
                <ItemList listaproduc ={listaProduc}/>
            </div>
        )
}
export default ItemListContainer;