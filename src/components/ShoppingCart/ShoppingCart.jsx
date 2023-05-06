import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import styles from "./ShoppingCart.module.css";
import { Button } from "../Common/Button";
import { removeItem } from "localforage";

export const ShoppingCart = () => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  const [productQuantity, setProductQuantity] = useState({});
  const [uniqueCart, setUniqueCart] = useState([]);

  useEffect(() => {
    const newProductQuantity = {};
    cart.forEach((item) => {
      if (newProductQuantity[item.id]) {
        newProductQuantity[item.id] += 1;
      } else {
        newProductQuantity[item.id] = 1;
      }
    });
    setProductQuantity(newProductQuantity);
  }, [cart]);

  useEffect(() => {
    const newUniqueCart = [];
    cart.forEach((item) => {
      if (!newUniqueCart.find((cartItem) => cartItem.id === item.id)) {
        newUniqueCart.push(item);
      }
    });
    setUniqueCart(newUniqueCart);
  }, [cart]);

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
        {uniqueCart.map((item, index) => {
          return (
            <ShoppingCardItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              quantity={productQuantity[item.id]}
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

const ShoppingCardItem = ({ id, name, price, image, quantity }) => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  const removeItem = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: "white",
        padding: "24px",
      }}
    >
      <img src={image} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>Quantity: {quantity}</p>
      <Button
        label="Remove Item"
        type={"danger"}
        onClick={() => {
          removeItem(id);
        }}
      />
    </div>
  );
};
