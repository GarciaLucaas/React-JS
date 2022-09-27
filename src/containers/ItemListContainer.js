import { useEffect, useState } from 'react';
import ItemList from "../components/ItemList";
import {useParams} from'react-router-dom';
import {db} from '../utils/firebaseConfig'
import {collection, getDocs, where,query } from "firebase/firestore";

const ItemListContainer =()=>{
    const [listaProduc, setListaProduc] = useState([])
    const {id} = useParams();
    useEffect(async()=>{
        if(id){
            const q = query((collection(db, "productos"),where('categoryId', '==',parseInt(id))))
            const querySnapshot = await getDocs(q)
            const dataFromFiresotre = querySnapshot.docs.map(item => ({id: item.id, ...item.data()}))
            setListaProduc(dataFromFiresotre)
        }
        else{
            const querySnapshot = await getDocs(collection(db, "productos"));
            const dataFromFiresotre = querySnapshot.docs.map(item => ({id: item.id, ...item.data()}))
            setListaProduc(dataFromFiresotre)
        }
    },[id]);
    useEffect(()=>{
        return(()=>{
            setListaProduc([])
        })
    },[]);
    
        return(
            <div>
                <ItemList listaproduc ={listaProduc}/>
            </div>
        )
}
export default ItemListContainer;