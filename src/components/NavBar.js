import React from"react";
import CartWidget from './CartWidget';
import{Link} from'react-router-dom';

function NavBar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-nav">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            CDHamburguesa </Link>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/">Combos </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/category/1">Hamburguesa </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/category/2">Adicional </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/category/3">Bebida </Link>
                </li>
              </ul>
            </div>
            
          </div>
          <CartWidget />
        </nav>  
      </div>
    );
}
  
export default NavBar;