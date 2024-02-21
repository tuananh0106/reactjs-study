import React, { useEffect, useRef, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  console.log(products);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [url]);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock Only
        </button>
      </div>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p>
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailbale"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
