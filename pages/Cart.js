import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Contexts } from "../Context";

function Cart() {

  const { cartItems } = useContext(Contexts);

	const cartItemElements = cartItems.map(item => (
		<CartItem key={item.id} item={item}/>
  ))
  
  const totalCost = (cartItems.length * 5.99);
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
  
  const [text, setText] = useState("Place order")

    function orderPlace() {
      setText("Ordering....")
    }

	return (
    <main className="cart-page">
      <h1>Check out</h1>
      <p className="total-cost">Total:{totalCostDisplay} </p>
		  {cartItemElements}
      <div className="order-button">
        <button onClick={orderPlace}>{text}</button>
      </div>
    </main>
  );
}

export default Cart;
