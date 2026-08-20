import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";

function App() {
  const { dark } = useContext(ThemeContext);

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    console.log("Adding", product);

    setCartItems([...cartItems, product]);

    alert("Product is added to cart");
  }

  function removeFromCart(index) {
    const updatedCart = cartItems.filter((item, i) => i !== index);

    setCartItems(updatedCart);
  }

  return (
    <>
      <div className={dark ? "dark" : "light"}>

        <NavBar cartCount={cartItems.length} />

        <Outlet
          context={{
            cartItems,
            addToCart,
            removeFromCart
          }}
        />

      </div>
    </>
  );
}

export default App;