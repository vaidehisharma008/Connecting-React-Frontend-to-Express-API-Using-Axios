import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("⚠️ Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>⏳ Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-container">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <h3>{p.name}</h3>
          <p>💰 Price: ₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
