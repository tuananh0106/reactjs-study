import React, { useEffect, useRef, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
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
