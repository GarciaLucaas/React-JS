import { useEffect, useState } from 'react';
import {customFetch} from '../utils/customFetch';
import ItemCount from '../components/ItemCount';
import ItemList from "../components/ItemList";
import productos from'../utils/productos'



const ItemListContainer =()=>{
    const [listaProduc, setListaProduc] = useState([])
    useEffect(()=>{
        customFetch(productos)
        .then(data=>setListaProduc(data))
        .catch(err => console.log(err))
    },[])
    
        return(
            <div>
                <ItemList listaproduc ={listaProduc}/>
                <ItemCount initial={1} stock={5}/>
            </div>
        )
}
export default ItemListContainer;