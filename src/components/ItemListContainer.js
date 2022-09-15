import { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import Productos from '../utils/Productos';
import ItemCount from './ItemCount';
import ItemList from "./ItemList";



const ItemListContainer =()=>{
    const [data,setData] = useState([])
    console.log(data);
    //cuando se monta el componente
    useEffect(()=>{
        customFetch(2000,Productos)
            .then(result => setData(result))
            .catch(err => console.log(err))
        //LLamada a la base de datos
    },[]);
        return(
            <div>
                <ItemList items={data}/>
                <ItemCount initial={1} stock={5}/>
            </div>
        )
    
}
export default ItemListContainer;