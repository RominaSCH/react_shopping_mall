import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let 박스 = styled.div`
  padding:20px;
  `;
let 제목 = styled.h2`
  color: ${ props => props.색상};
`;//클래스 안써도 좋지만, 관리할 컴포넌트가 많고 클래스 선언보다 쉬워질 수도 있다.
//단점이 더 많음. 컴포넌트를 만드는 것이라서 실수나 문제가 생길 수 있음.
//장단점이 있어서 선택사항임. 개인 취향에 따라. 상황에 따라 쓰는 것


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
      <박스>
        <제목 색상={"skyblue"}>I Am What I do!</제목>
      </박스>

    </div>
  );
}

export default Detail;
