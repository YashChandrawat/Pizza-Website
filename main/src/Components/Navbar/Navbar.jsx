import React, { useEffect } from "react";
import "./Navbar.css";
import logoImg from "../Navbar/logoNav.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../Redux/Slices/cartSlice";

function Navbar() {
  let { cart, totalQuantity } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="navbar-class">
      <div className="left-navbar">
        <img src={logoImg} alt="" className="logo-img" />
        <h2 className="logo-head">PIZZA HUT</h2>
      </div>
      <div className="right-navbar">
        <span>
          <Link to="/" className="link-tag">
            HOME
          </Link>
        </span>
        <span>
          <a href="/#order-pizzas" className="a-tag">
            SHOP
          </a>
        </span>
        <span>
          <a href="/#contact" className="a-tag">
            CONTACT
          </a>
        </span>
        <span>
          <Link to="/book-table" className="link-tag">
            BOOK
          </Link>
        </span>
        <span>
          <Link to="/cart" className="link-tag">
            <button className="btn-home-nav">CART({totalQuantity})</button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
