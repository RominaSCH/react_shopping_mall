import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Watercolor(props) {
  let history = useHistory();
    return (
      <div className="detail_items">
        
        {props.items.map((e, i) => {
          return (
            <div className="detail_item">
              <div className="detail__img">
                <img src={props.items[i].img} alt={props.items[i].title} />
              </div>
              <div className="detail_right">
                <div className="detail__info">
                  <h3 className="detail__title">{props.items[i].title}</h3>
                  <p className="detail__content">{props.items[i].content}</p>
                  <p className="detail__price">{props.items[i].price} KRW</p>
                </div>
                <div className="order_btns">
                  <button className="btn cart_Btn">Add to Cart</button>
                  <button className="btn order_Btn">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
        <button onclick={() => {
          history.push("/");
        }}>Back</button>
      </div>
    );
  }

export default Watercolor;