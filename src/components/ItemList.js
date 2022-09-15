import Item from "./Item"


const ItemList =({items})=>{
    return(
        <>
            {
                items.map(item => (
                    <Item
                        key = {item.id}
                        id = {item.id}
                        title = {item.title}
                        precio = {item.precio}
                        img = {item.img}
                        description={item.description}
                    />
                ))
            }   
        </>
    )
}
export default ItemList