import React, { useContext, useState } from "react";
import styles from "./ProductPage.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";

export const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://picsum.photos/seed/1/200/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/seed/2/200/300",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://picsum.photos/seed/3/200/300",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "https://picsum.photos/seed/4/200/300",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      image: "https://picsum.photos/seed/5/200/300",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      image: "https://picsum.photos/seed/6/200/300",
    },
    {
      id: 7,
      name: "Product 7",
      price: 700,
      image: "https://picsum.photos/seed/7/200/300",
    },
    {
      id: 8,
      name: "Product 8",
      price: 800,
      image: "https://picsum.photos/seed/8/200/300",
    },
    {
      id: 9,
      name: "Product 9",
      price: 900,
      image: "https://picsum.photos/seed/9/200/300",
    },
    {
      id: 10,
      name: "Product 10",
      price: 1000,
      image: "https://picsum.photos/seed/10/200/300",
    },
    {
      id: 11,
      name: "Product 11",
      price: 1100,
      image: "https://picsum.photos/seed/11/200/300",
    },
    {
      id: 12,
      name: "Product 12",
      price: 1200,
      image: "https://picsum.photos/seed/12/200/300",
    },
    {
      id: 13,
      name: "Product 13",
      price: 1300,
      image: "https://picsum.photos/seed/13/200/300",
    },
    {
      id: 14,
      name: "Product 14",
      price: 1400,
      image: "https://picsum.photos/seed/14/200/300",
    },
    {
      id: 15,
      name: "Product 15",
      price: 1500,
      image: "https://picsum.photos/seed/15/200/300",
    },
    {
      id: 16,
      name: "Product 16",
      price: 1600,
      image: "https://picsum.photos/seed/16/200/300",
    },
    {
      id: 17,
      name: "Product 17",
      price: 1700,
      image: "https://picsum.photos/seed/17/200/300",
    },
    {
      id: 18,
      name: "Product 18",
      price: 1800,
      image: "https://picsum.photos/seed/18/200/300",
    },
    {
      id: 19,
      name: "Product 19",
      price: 1900,
      image: "https://picsum.photos/seed/19/200/300",
    },
    {
      id: 20,
      name: "Product 20",
      price: 2000,
      image: "https://picsum.photos/seed/20/200/300",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div className={`${styles["product_page_container"]}`}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          const newProducts = products.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
          setFilteredProducts(newProducts);
        }}
        className={`${styles["search_input"]}`}
      />

      <div className={`${styles["products_container"]}`}>
        {filteredProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
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
