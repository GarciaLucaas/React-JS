import React from"react";
import CartWidget from './CartWidget';

function NavBar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-nav">
          <div className="container-fluid">
            <a class="navbar-brand" href="#">
            CDHamburguesa</a>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">Combos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">Hamburguesa</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">Adicional</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">Bebida</a>
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