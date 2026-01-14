import { useEffect, useState } from "react";
import { mockData } from "../data/data.js";
import Card from "./Card.jsx";
import CompareContainer from "./CompareContainer.jsx";
import CompareBar from "./CompareBar.jsx";

export default function Container() {
  const [compare, setCompare] = useState(() => {
    return JSON.parse(localStorage.getItem("compare")) || [];
  });

  return (
    <div className="container">
      {/* <h1>Product Comparison</h1> */}
      <CompareContainer
        compare={compare}
        setCompare={setCompare}
      ></CompareContainer>
      <CompareBar compare={compare} setCompare={setCompare}></CompareBar>
      <div className="product-grid">
        {mockData.map((product) => (
          <Card
            key={product.id}
            product={product}
            compare={compare}
            setCompare={setCompare}
          ></Card>
        ))}
      </div>
    </div>
  );
}
