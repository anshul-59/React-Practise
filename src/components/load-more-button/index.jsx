import React, { useEffect, useState } from "react";
import "./styles.css";
export default function LoadMoreButton() {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);

  async function fetchProducts() {
    setloading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const result = await response.json();
    if (result && result.products && result.products.length) {
      setproducts((prevProducts) => [...prevProducts, ...result.products]);
    }
    setloading(false);
    // console.log(result);
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    <h1>Loading.....</h1>;
  }
  return (
    <div className="container">
      <div className="products-container">
        {products && products.length
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} />
                <span>{product.price}</span>
                <span>{product.title}</span>
              </div>
            ))
          : products}
      </div>
      <div className="button-container">
        {products.length <= 100 && (
          <button onClick={() => setcount(count + 1)}>
            Load more products
          </button>
        )}
      </div>
    </div>
  );
}
