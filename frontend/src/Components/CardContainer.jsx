import React from "react";
import Card from "./Card";
import "./card.css";

const CardContainer = ({ data }) => {
  return (
    <div className="cardContainer">
      {data?.map((cardItem) => (
        <Card key={cardItem.plan_id} cardData={cardItem} />
      ))}
    </div>
  );
};

export default CardContainer;
