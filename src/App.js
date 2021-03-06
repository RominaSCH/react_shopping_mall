import "./App.css";
import { Nav, Jumbotron, Button } from "react-bootstrap";
import React, { useState, useContext } from "react";
import ITEM from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Watercolor from "./Watercolor";
import Detail from "./Detail";
import { useHistory } from "react-router-dom";
import axios from "axios";

export let stockContext = React.createContext();
//하위 컴포넌트에 계속 props안쓰려고 context 문법을 씀
//React.createContext()로 같은 변수값을 공유할 범위를 생성한다.
//같은 값을 공유할 HTML을 범위로 싸매라

function App() {
  //각 사진 사이즈 같게 하면서 화면 사이즈 변경에도 잘 적응하게 바꾸기
  let [items, mItems] = useState(ITEM);
  let [loadItems, mLoadItems] = useState([]);
  let [stock, mStock] = useState([10,24,88]);
  return (
    <div className="App">
      <Nav className="navigation" fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link eventKey="home" to="/react_shopping_mall/" as={Link}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="watercolor" to="/watercolor" as={Link}>
            Watercolor
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="event" to="/event" as={Link}>
            Event
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about" to="/about" as={Link}>
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <stockContext.Provider value={stock} >
        {/* 공유하고싶은 값은 꼭 value={변수명} 으로 써줘야한다 개명 ㄴㄴ*/}

      <Route exact path="/react_shopping_mall/">
        <Jumbotron className="background">
          <h1>Welcome!</h1>
          <p>We love analog art goods!</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

        <div className="wrapper">
        {items.map((e, i) => {
          return <Items items={items[i]} i={i} key={i}/>;
        })}
        </div>

        <button
          className="more-btn"
          onClick={() => {

            //Loading UI Create
            //axios.post("serverURL", {id:"~~~~", pw: "~~~~"})

            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((obj) => {
                //Loading UI Remove
                mItems([...items, ...obj.data]); //답 보고 함, 난 왜 새 useState로 해도 안됐을까..?
                console.log(items);
                // <Items moreItems={loadItems} />
              })
              .catch(() => {
                //Loading UI Remove
                console.log("failed");
              });
          }}
        >
          See More
        </button>
      </Route>

      

      <Route path="/watercolor">
        <Watercolor items={items} />
      </Route>

      <Route path="/detail/:id">
        <Detail items={items} stock={stock} mStock={mStock}/>
      </Route>

      </stockContext.Provider>

      {/* <Route path="/:id">
        <div>아무거나 적었을 때 이걸 보여준다</div>
      </Route> */}
    </div>
  );
}
//exact 는 /라는걸 다 갖고 있어도 /만 가진 애만 home page만 보여줌
function Items(props) {
  return (
      <div className="item" key={props.i}>
        <img src={props.items.img} alt={props.items.title} />
        <div className="item__info">
          <h4 className="item__title">{props.items.title}</h4>
          <p className="item__price">{props.items.price}</p>
        </div>
      </div>
  );
}

export default App;
