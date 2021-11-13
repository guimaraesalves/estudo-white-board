import React from "react";
import "./Card.css"

function Card({ product }) {
  const card = product.map((prod) => (
    <div key={prod.id} className="w3-card-4">
      <img src={prod.img}/>
      
      <h2>{prod.name}</h2>
      <p>{prod.category}</p>
      <p>R$ {prod.price}</p>
      
    </div>
  ));
  return <div className="card" >{card}</div>;
}

export default Card;
