import { createContext, useState } from "react";

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
    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id)) 
    }
    const isInCart = (id)=> cartList.find(productos => productos.id ===id) ? true : false 
    const totalPrecio = () =>{
        return cartList.reduce((prec,i)=>prec + i.qty * i.precio,0)
    }
    const cantItem = () => cartList.reduce((contador,producto)=> contador + producto.qty,0)
    return(
        <CartContext.Provider value={{cartList, addItem, clear,removeItem, isInCart,cantItem,totalPrecio}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider