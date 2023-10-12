import "./App.css";
import Story from "./Components/Story/Story";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/Form/Form";
import PizzaCaro from "./Components/Pizzas/PizzaCaro.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Story />
      <PizzaCaro />
      <Form />
    </div>
  );
}

export default App;
