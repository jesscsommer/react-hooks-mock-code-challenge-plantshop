import React, { useState } from "react";

function PlantCard({ plant }) {
  const {name, price, image} = plant
  const [inStock, setInStock] = useState(true)

  const handleClick = () => {
    setInStock(inStock => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
