import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const numItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-summary">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-summary__num-items">{numItems}</span>
    </div>
  );
};

export default CartSummary;
