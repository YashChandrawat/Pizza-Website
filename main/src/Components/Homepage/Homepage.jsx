import React from "react";
import "./Homepage.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import homePage from "./home-page.png";

function Homepage() {
  return (
    <div className="homepage">
      <div className="left-side-home">
        <div className="inner-left">
          <h1 className="home-heading">
            Handmade, With an Extra Pinch of <span style={{color:"red"}}>Love</span>
          </h1>
          <p className="home-para">
            Order now from the large variety of delicious pizza below
          </p>
          <button className="btn-home">
            <AiOutlineShoppingCart className="btn-cart"/> Order Now
          </button>
        </div>
      </div>
      <div className="right-side-home">
        <img src={homePage} alt="home-pageimage" className="home-page-pizza" />
      </div>
    </div>
  );
}

export default Homepage;
