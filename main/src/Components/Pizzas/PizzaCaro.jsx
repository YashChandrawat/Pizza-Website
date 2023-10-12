import React from "react";
import Slider from "react-slick";
import PizzaCard from "./PizzaCard";
import "./PizzaCaro.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const pizzas = [
  {
    name: "Margherita",
    image:
      "https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/pizza-1.png",
    price: 10.99,
    description: "Classic tomato and cheese pizza.",
  },
  {
    name: "Cheese Corn",
    image:
      "https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/pizza-2.png",
    price: 12,
    description: "This is the cheese corn pizza",
  },
  {
    name: "Cheese Corn",
    image:
      "https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/pizza-3.png",
    price: 12,
    description: "This is the cheese corn pizza",
  },
  {
    name: "Cheese Corn",
    image:
      "https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/pizza-4.png",
    price: 12,
    description: "This is the cheese corn pizza",
  },
  {
    name: "Cheese Corn",
    image:
      "https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/pizza-1.png",
    price: 12,
    description: "This is the cheese corn pizza",
  },
];

function PizzaCarousel() {
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        className="custom-prev-arrow btn-left"
        style={{ ...style, zIndex: "1" }}
        onClick={onClick}
      >
        <AiFillCaretLeft />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        className="custom-next-arrow btn-right"
        style={{ ...style, zIndex: "1" }}
        onClick={onClick}
      >
        <AiFillCaretRight />
      </div>
    );
  };
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="main-caro">
      <div className="top">
        <h2 className="caro-h2">Popular Dishes</h2>
        <h1 className="caro-h1">Browse Our Menu</h1>
      </div>

      <Slider {...settings}>
        {pizzas.map((pizza, index) => (
          <PizzaCard key={index} pizza={pizza} />
        ))}
      </Slider>
    </div>
  );
}

export default PizzaCarousel;
