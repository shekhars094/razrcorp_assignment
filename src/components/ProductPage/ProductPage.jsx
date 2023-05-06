import React, { useContext, useState } from "react";
import styles from "./ProductPage.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";

export const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 100,
      image: "https://picsum.photos/seed/1/200/300",
    },
    {
      id: 2,
      name: "Sports Shoes",
      price: 200,
      image: "https://picsum.photos/seed/2/200/300",
    },
    {
      id: 3,
      name: "Game Console",
      price: 300,
      image: "https://picsum.photos/seed/3/200/300",
    },
    {
      id: 4,
      name: "T-Shirt",
      price: 400,
      image: "https://picsum.photos/seed/4/200/300",
    },
    {
      id: 5,
      name: "Pants",
      price: 500,
      image: "https://picsum.photos/seed/5/200/300",
    },
    {
      id: 6,
      name: "Socks",
      price: 600,
      image: "https://picsum.photos/seed/6/200/300",
    },
    {
      id: 7,
      name: "Shoes",
      price: 700,
      image: "https://picsum.photos/seed/7/200/300",
    },
    {
      id: 8,
      name: "Bulb",
      price: 800,
      image: "https://picsum.photos/seed/8/200/300",
    },
    {
      id: 9,
      name: "Bottle",
      price: 900,
      image: "https://picsum.photos/seed/9/200/300",
    },
    {
      id: 10,
      name: "Cup",
      price: 1000,
      image: "https://picsum.photos/seed/10/200/300",
    },
    {
      id: 11,
      name: "Chair",
      price: 1100,
      image: "https://picsum.photos/seed/11/200/300",
    },
    {
      id: 12,
      name: "Table",
      price: 1200,
      image: "https://picsum.photos/seed/12/200/300",
    },
    {
      id: 13,
      name: "Pen",
      price: 1300,
      image: "https://picsum.photos/seed/13/200/300",
    },
    {
      id: 14,
      name: "Books",
      price: 1400,
      image: "https://picsum.photos/seed/14/200/300",
    },
    {
      id: 15,
      name: "Novels",
      price: 1500,
      image: "https://picsum.photos/seed/15/200/300",
    },
    {
      id: 16,
      name: "Cricket Kit",
      price: 1600,
      image: "https://picsum.photos/seed/16/200/300",
    },
    {
      id: 17,
      name: "Bag",
      price: 1700,
      image: "https://picsum.photos/seed/17/200/300",
    },
    {
      id: 18,
      name: "Charger",
      price: 1800,
      image: "https://picsum.photos/seed/18/200/300",
    },
    {
      id: 19,
      name: "Laptop",
      price: 1900,
      image: "https://picsum.photos/seed/19/200/300",
    },
    {
      id: 20,
      name: "Smart Phones",
      price: 2000,
      image: "https://picsum.photos/seed/20/200/300",
    },
  ];

  const searchFilter = (e) => {
    setSearch(e.target.value);
    const newProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredProducts(newProducts);
  };

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className={`${styles["product_page_container"]}`}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchFilter}
        className={`${styles["search_input"]}`}
      />

      <div className={`${styles["products_container"]}`}>
        {filteredProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
