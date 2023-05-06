import React, { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import styles from "./ShoppingCart.module.css";
import { Button } from "../Common/Button";

export const ShoppingCart = () => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  const total = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const checkoutApiCall = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Checkout successful");
        setCart([]);
      });
  };

  return (
    <div className={`${styles["cart_page_container"]}`}>
      <div className={`${styles["cart_container"]}`}>
        {cart.map((item, index) => {
          return (
            <ShoppingCardItem
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
      <div className={`${styles["cart_info_container"]}`}>
        <h3>Total: {total}</h3>
        <Button
          label="Clear Cart"
          type={"danger"}
          onClick={() => {
            setCart([]);
          }}
        />
        <Button
          label={"Checkout"}
          onClick={() => {
            checkoutApiCall();
          }}
        />
      </div>
    </div>
  );
};

const ShoppingCardItem = ({ name, price, image }) => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        padding: "24px",
      }}
    >
      <img src={image} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>{price}</p>
      <Button
        label="Remove Item"
        type={"danger"}
        onClick={() => {
          const newCart = cart.filter((item) => {
            return item.name !== name;
          });
          setCart(newCart);
        }}
      />
    </div>
  );
};
