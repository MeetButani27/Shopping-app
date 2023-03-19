import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-3 me-4" to="/" >Atoz Sellers</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/home">Mobiles</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/electronics">Electronics</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/fashion">Fashion</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                      </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <FavoriteBorderIcon className="mx-2" style={{color: 'silver', margin: 'auto'}}/>
                    <ShoppingCartIcon className="mx-2 me-3" style={{color: 'silver', margin: 'auto'}}/>
                    <button className="btn btn-success mx-2" type="submit">Login</button>
                    <button className="btn btn-primary mx-2" type="submit">SignUp</button>
                  </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar