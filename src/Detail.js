import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  return (
    <div className="item">
      
      <div className="item__img">
        <img src={props.items[id].img} alt={props.items[id].title} />
      </div>
      <div className="item_right">
        <div className="item__info">
          <h3 className="item__title">{props.items[id].title}</h3>
          <p className="item__content">{props.items[id].content}</p>
          <p className="item__price">{props.items[id].price} KRW</p>
        </div>
        <div className="order_btns">
          <button className="btn cart_Btn">Add to Cart</button>
          <button className="btn order_Btn">Buy Now</button>
        </div>
      </div>

    </div>
  );
}

export default Detail;
