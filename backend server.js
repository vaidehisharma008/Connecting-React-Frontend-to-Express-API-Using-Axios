const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 79999 },
  { id: 2, name: "Smartphone", price: 29999 },
  { id: 3, name: "Headphones", price: 2499 },
  { id: 4, name: "Smartwatch", price: 8999 }
];

// API endpoint
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
