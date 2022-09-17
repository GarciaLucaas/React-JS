import React from "react";

const Item = ({title,precio,description,img})=>{
    return(
        <div>
           <div className="card" style="width: 18rem;">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${precio}</p>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
                </div>
        </div>
    )
}
export default Item