import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PizzaCard.css"; // Create a CSS file for styling

function PizzaCard({ pizza }) {
  const { name, image, price, description } = pizza;

  return (
    <div className="pizza-card-top">
      <div className="pizza-card">
        <div className="image-section">
          <img src={image} alt={name} className="pizza-image" />
        </div>
        <div className="pizza-details">
          <h2 className="pizza-name">{name}</h2>
          <p className="pizza-price">${price}</p>
          <p className="pizza-description">{description}</p>
        </div>
        <button className="btn-home btn-order">Order Now</button>
      </div>
    </div>
  );
}

export default PizzaCard;
