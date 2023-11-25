import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import Cart from "../src/Components/Cart/Cart.jsx";
import { Route, Routes } from "react-router-dom";
import MainHome from "./Components/MainHome/MainHome.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Homepage />
      <Story />
      <PizzaCaro /> */}
      <Routes>
        <Route path="/book-table" element={<Form />} />
        <Route exact path="/" element={<MainHome />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={"/contact"} element={<Footer />} />
        <Route path={"/cart/order-placed/"} element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
