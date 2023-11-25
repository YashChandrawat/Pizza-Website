import React from "react";
import "./PizzaCaro.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slices/cartSlice";

function PizzaCarousel() {
  const items = useSelector((state) => state.allcart.items);
  const onlyCart = useSelector((state) => state.allcart);

  const dispatch = useDispatch();
  console.log(onlyCart.cart);

  return (
    <div className="main-caro" id="order-pizzas">
      <div className="top">
        <h2 className="caro-h2">Popular Dishes</h2>
        <h1 className="caro-h1">Browse Our Menu</h1>
      </div>

      <div className="pizza-card-top">
        {items.map((item) => (
          <div className="pizza-card">
            <div className="image-section">
              <img src={item.image} alt={item.name} className="pizza-image" />
            </div>
            <div className="pizza-details">
              <div className="pizza-part">
                <h2 className="pizza-name">{item.name}</h2>
                <h3 className="pizza-price">₹ {item.price}</h3>
              </div>
              <p className="pizza-description">{item.description}</p>
            </div>
            <button
              className="btn-home btn-order"
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaCarousel;
