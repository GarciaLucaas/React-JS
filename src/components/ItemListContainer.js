import { Component } from "react";

class ItemListContainer extends Component{
    render(){
        return(
            <div>
                Item{this.props.card}
            </div>
        )
    }
}
export default ItemListContainer;