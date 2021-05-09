import "./App.css";
import { Nav, Jumbotron, Button } from "react-bootstrap";
import React, { useState } from "react";
import ITEM from "./data.js";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  //각 사진 사이즈 같게 하면서 화면 사이즈 변경에도 잘 적응하게 바꾸기
  let [items, mItems] = useState(ITEM);

  return (
    <div className="App">
      <Nav className="navigation" fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/watercolor" eventKey="watercolor">
            Watercolor
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/pastel" eventKey="pastel">
            Pastel
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/others" eventKey="disabled">
            Others
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Route exact path="/">
        <Jumbotron className="background">
          <h1>Welcome!</h1>
          <p>We love analog art goods!</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <Items items={items} component={Items} />
      </Route>

      <Route path="/watercolor">
        <DetailItem items={items} />
      </Route>
    </div>
  );
}
//exact 는 /라는걸 다 갖고 있어도 /만 가진 애만 home page만 보여줌
function Items(props) {
  return (
    <div className="wrapper">
      {props.items.map((element, i) => {
        return (
          <div className="item" key={i}>
            <img src={props.items[i].img} alt={props.items[i].title} />
            <div className="item__info">
              <h4 className="item__title">{props.items[i].title}</h4>
              <p className="item__price">{props.items[i].price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DetailItem(props) {
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
    </div>
  );
}

export default App;
