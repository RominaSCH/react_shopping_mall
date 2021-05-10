import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let [alert, mAlert] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      mAlert(0);
    }, 3000); //opacity 말고 modal 처럼 삼항연산자 써서 하는 방식으로 알려주심
    //opacity는 창이 존재하기때문에 화면상 위치를 계속 차지하는 단점이 있음.
  })
  let { id } = useParams();
  return (
    <div className="item">

      <div className="alert" style={{opacity:alert}}>
        <p>It just left 3 stock! Order quickly!</p>
      </div>

      <div className="item__img" >
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
