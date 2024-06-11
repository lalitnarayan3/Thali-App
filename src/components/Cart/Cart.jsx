import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, updateCart } from "./cartSlice";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [successMsg, setIsSuccesMsg] = useState("");

  const cart = useSelector((state) => state.cart.cart);

  const totalQuantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart({ itemId }));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, newQuantity }));
  };
  const handleCartUpdate = () => {
    setIsSuccesMsg("Your order successfully completed...!!");
    setTimeout(() => {
      navigate("/checkout");
      dispatch(updateCart());
    }, 3000);
  };

  return (
    <div>
      <h2 className="mb-4 mt-4 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.cartMsg}>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartDetails}>
              <div className={styles.cart}>
                <img src={item.image} alt="product" />
                <h4>{item.name}</h4>
              </div>
              <div className={styles.cartMiddle}>
                <div className="fw-bold">
                  <i className="bi bi-currency-rupee">
                    {item.caloriesPerServing * item.quantity}
                  </i>
                </div>

                <div className={styles.quantity}>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                </div>

                <div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {cart.length > 0 && (
        <div className={styles.cartTotal}>
          <h4>Cart Total</h4>
          <p>Total Quantity: {totalQuantity}</p>
          <p>
            Total Price: <i className="bi bi-currency-rupee">{totalPrice}</i>
          </p>{" "}
          <button className={styles.checkoutButton} onClick={handleCartUpdate}>
            <i className="bi bi-currency-rupee">{totalPrice}</i> Order Now
          </button>
          <p className="mt-2 mb-4 text-success fw-bold">{successMsg}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
