import React from "react";
import Homepage from "../Homepage/Homepage";
import Story from "../Story/Story";
import PizzaCarousel from "../Pizzas/PizzaCaro";
import Footer from "../Footer/Footer";

function MainHome() {
  return (
    <>
      <Homepage />
      <Story />
      <PizzaCarousel />
      <Footer />
    </>
  );
}

export default MainHome;
