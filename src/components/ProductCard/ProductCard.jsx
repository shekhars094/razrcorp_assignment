import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { Button } from "../Common/Button";

export const ProductCard = ({ name, price, image }) => {
  const { cart, setCart } = useContext(ShoppingCartContext);

  return (
    <div className={`${styles["product_card_container"]}`}>
      <img src={image} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>{price}</p>

      <Button
        label="Add to cart"
        onClick={() => {
          setCart([...cart, { name, price, image }]);
        }}
      />
    </div>
  );
};
