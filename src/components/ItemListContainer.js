import { Component } from "react";
import ItemCount from './ItemCount';
class ItemListContainer extends Component{
    render(){
        return(
            <div>
                Item{this.props.card}
                <ItemCount initial={1} stock={5}/>
            </div>
        )
    }
}
export default ItemListContainer;