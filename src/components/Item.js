import '../App.css';
import React from "react";
import{ Link} from'react-router-dom';


const Item = ({title,precio,description,img,id})=>{
    return(
        <div className='container'>
            <div className='row'>
                <div className="card col-2">
                    <img src={img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${precio}</p>
                        <p className="card-text">{description}</p>
                        <Link to ={"/item/" + id} className="btn btn-primary">Ver detalle</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item;