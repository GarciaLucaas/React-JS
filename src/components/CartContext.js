import { createContext, useState } from "react";

export const CartContext = createContext()
const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    const addItem = (productos, qty)=>{
        setCartList([...cartList, {...productos, qty:qty}])
    }
    const clear = () =>{
        setCartList([]);
    }
    const removeItem = (id) =>{
        setCartList(cartList.filter(item => item.id !== id)) 
    }
    
    // const isInCart = (id,qty)=>{
    //     const doble = cartList.find(item => item.id === id)
    //     if(doble){
    //         setCartList([qty])
    //     }
    // } lo saque del value
    return(
        <CartContext.Provider value={{cartList, addItem, clear,removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider