import React, { useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "../assets/loading.gif";

export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const { data: products, loading, error } = useFetch(url);

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

      {loading && <p className="loading">Loading Product...</p>}

      {error && <p>{error}</p>}

      {products &&
        products.map((product) => (
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
