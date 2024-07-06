import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import "./card.css";
import { FaCheck } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="headerContainer">
        <FaAngleLeft />
        <p>Choose your plan</p>
      </div>
      <div className="imageContainer">
        <img src={cardData.banner} height={"150"} width={"100%"} alt="" />
        <div
          className="btnContainer"
          style={{ backgroundImage: `url(${cardData.button_background})` }}
        >
          <p className="taggedAs">{cardData.tagged_as}</p>
          <div>
            <h4>{cardData.plan_name}</h4>
            <p className="cost"> RS{cardData.cost_per_day} / Day</p>
          </div>
        </div>
      </div>
      <div className="claims">
        <h5>{cardData.claims}</h5>
      </div>
      <div>
        {cardData?.description?.data_monthly.map((monthlyItem) => (
          <div className="monthlyItem" key={monthlyItem.text}>
            {monthlyItem.isLocked === "True" ? <IoMdLock /> : <FaCheck />}

            <p>{monthlyItem.text}</p>
          </div>
        ))}
      </div>
      <button className="btn">{cardData.cta}</button>
    </div>
  );
};

export default Card;
