import { createContext, useState } from "react";
import { doc, setDoc, collection, updateDoc, increment,serverTimestamp } from "firebase/firestore";
import {db} from '../utils/firebaseConfig'
export const CartContext = createContext()
const CartContextProvider = ({children}) =>{
   
    const [cartList, setCartList] = useState([])
    const addItem = (productos, qty)=>{
        if(isInCart(productos.id)){
            setCartList(cartList.map(product =>{
                return product.id === productos.id ? {...product,qty: product.qty+qty}:product
            }))
        }else{
            setCartList([...cartList, {...productos, qty}])
        }
        
    }
    const clear = () =>{
        setCartList([]);
    }
    const crearOrden = async () =>{
        
        let order = {
            buyer:{
                name:"Messi",
                email:"@gmail.com",
                phone:"123456"

            },
            items: cartList,
            date: serverTimestamp(),
            total: totalPrecio()
        }
        const newOrder = doc(collection(db,"orders"))
        await setDoc(newOrder,order)
        cartList.forEach(async(item) =>{
            const actualizarStock = doc(db, "productos", item.id);
            await updateDoc(actualizarStock, {
                stock: increment(-item.qty)
            });
        }
           
        )
        setCartList([]);
        alert('tu orden esta creada: ' + newOrder.id + "Gracias por la compra")
    }
    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id)) 
    }
    const isInCart = (id)=> cartList.find(productos => productos.id ===id) ? true : false 
    const totalPrecio = () =>{
        return cartList.reduce((prec,i)=>prec + i.qty * i.precio,0)
    }
    const cantItem = () => cartList.reduce((contador,producto)=> contador + producto.qty,0)
    return(
        <CartContext.Provider value={{cartList, addItem, clear,removeItem, isInCart,cantItem,totalPrecio,crearOrden}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider