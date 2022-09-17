import { useEffect, useState } from 'react';
import {customFetch} from '../utils/customFetch';
import ItemCount from '../components/ItemCount';
import ItemList from "../components/ItemList";
import productos from'../utils/productos'



const ItemListContainer =()=>{
    const [listaproduc, setlistaproduc] = useState([])
    useEffect(()=>{
        customFetch(productos)
        .then(data=>setlistaproduc(data))
        .catch(err => console.log(err))
    },[])
    
        return(
            <div>
                <ItemList listaproduc ={listaproduc}/>
                <ItemCount initial={1} stock={5}/>
            </div>
        )
    
}
export default ItemListContainer;