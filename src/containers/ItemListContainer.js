import { useEffect, useState } from 'react';
import {customFetch} from '../utils/customFetch';
import ItemList from "../components/ItemList";
import productos from'../utils/productos'
import {useParams} from'react-router-dom';



const ItemListContainer =()=>{
    const [listaProduc, setListaProduc] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        if(id){
            customFetch(productos.filter(item => item.categoryId == id))
            .then(data=>setListaProduc(data))
            .catch(err => console.log(err))
        }else{
            customFetch(productos)
            .then(data=>setListaProduc(data))
            .catch(err => console.log(err))
        }
    },[id])
    
        return(
            <div>
                <ItemList listaproduc ={listaProduc}/>
            </div>
        )
}
export default ItemListContainer;