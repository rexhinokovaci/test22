import React, { useContext, useState } from "react";
import { CartItem, Modal } from "@components";
import { CartContext } from "@context";
import classes from "./Cart.module.scss";

const Cart = () => {
  const ctx = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    // Save the order here using the cart items and total amount
    // You can use an API, local storage, or a database to save the order data
    // Once the order is saved, set the orderPlaced state to true
    setOrderPlaced(true);
  };

  return (
    <Modal show={ctx.isOpen} onClose={ctx.onCloseCart}>
      {orderPlaced ? (
        <div className={classes["order-placed"]}>
          <h3>Thank you for your order!</h3>
          <p>We have received your order and will process it soon.</p>
        </div>
      ) : (
        <>
          <ul className={classes["cart-items"]}>
            {ctx.items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                itemTotal={item.amount * item.price}
                onAdd={() => ctx.onAddItem({ ...item, amount: 1 })}
                onRemove={() => ctx.onRemoveItem(item.id)}
              ></CartItem>
            ))}
          </ul>
          <div className={classes.total}>
            <label>Final Total </label>
            <label>{ctx.totalAmount.toFixed(2)} $</label>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={ctx.onClose}
            >
              Close
            </button>
            <button className={classes.button} onClick={handleOrder}>
              Order
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
