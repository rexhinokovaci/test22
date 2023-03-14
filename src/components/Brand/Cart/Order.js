import React, { useContext, useState } from "react";
import { CartContext } from "@context";
import { useHistory } from "react-router-dom";
import classes from "./Cart.module.scss";

const Order = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const ctx = useContext(CartContext);
  const history = useHistory();

  const handleOrder = () => {
    // Save the order to the database or an external service
    // In this example, we're just logging the order details to the console
    console.log("Order placed: ", ctx.items, ctx.totalAmount);

    // Clear the cart
    ctx.onClearCart();

    // Set the order placed flag to true
    setIsOrderPlaced(true);

    // Redirect to the "Thank You" page after 2 seconds
    setTimeout(() => {
      history.push("/thank-you");
    }, 2000);
  };

  return (
    <div className={classes.order}>
      {isOrderPlaced ? (
        <h2 className={classes["order-placed"]}>Thanks for your order!</h2>
      ) : (
        <>
          <h2 className={classes["order-header"]}>Order Summary</h2>
          <ul className={classes["order-items"]}>
            {ctx.items.map((item) => (
              <li key={item.id} className={classes["order-item"]}>
                <span className={classes["order-item-name"]}>{item.name}</span>
                <span className={classes["order-item-amount"]}>
                  {item.amount} x {item.price.toFixed(2)}$
                </span>
              </li>
            ))}
          </ul>
          <div className={classes.total}>
            <label>Final Total</label>
            <label>{ctx.totalAmount.toFixed(2)} $</label>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={ctx.onCloseCart}>
              Close
            </button>
            <button className={classes.button} onClick={handleOrder}>
              Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
