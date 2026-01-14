import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const Card = ({ product, compare, setCompare }) => {
  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compare));
  }, [compare]);

  const toggleCompare = (product) => {
    if (compare.some((p) => p.id === product.id)) {
      setCompare(compare.filter((p) => p.id !== product.id));
    } else if (compare.length < 3) {
      setCompare([...compare, product]);
    }
  }; // updates the "compare" state by adding or removing the product

  return (
    <div className="card" key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <img src={product.image} alt={product.name} />

      <p className="price">Price : ₹ {product.price}</p>
      <ul>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-battery-full" />
          <span>Battery : {product.battery} mAh</span>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-mobile-screen" />
          <span>Screen : {product.screen} inches</span>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-camera" />
          <span>Rear Camera : {product.rearCamera} MP</span>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-gear" />
          <span>OS : {product.os}</span>
        </li>
      </ul>

      <button
        onClick={() => toggleCompare(product)}
        disabled={
          compare.length === 3 && !compare.some((p) => p.id === product.id)
        }
        className={`${
          compare.some((p) => p.id === product.id) ? "remove" : "add"
        }`}
      >
        {compare.some((p) => p.id === product.id) ? "Remove" : "Add to Compare"}
      </button>
    </div>
  );
};

export default Card;
