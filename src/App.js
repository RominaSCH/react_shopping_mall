import "./App.css";
import { Nav, Jumbotron, Button } from "react-bootstrap";
import React, { useState } from "react";
import ITEM from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import Watercolor from "./Watercolor";
import Detail from "./Detail";
import { useHistory } from "react-router-dom";
import axios from "axios";

function App() {
  //각 사진 사이즈 같게 하면서 화면 사이즈 변경에도 잘 적응하게 바꾸기
  let [items, mItems] = useState(ITEM);

  return (
    <div className="App">
      <Nav className="navigation" fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link eventKey="home" to="/" as={Link}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="watercolor" to="/watercolor" as={Link}>Watercolor</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="event" to="/event" as={Link}>Event</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about" to="/about" as={Link}>About</Nav.Link>
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

        <button className="more-btn" onClick={ () => {
          axios.get("https://codingapple1.github.io/shop/data2.json")
          .then( (obj) => { 
            <Items items={obj.data} />
           } )
          .catch( () => { 
            console.log("failed")
          } )

        }}>See More</button>
      </Route>

      <Route path="/watercolor">
        <Watercolor items={items} />
      </Route>

      <Route path="/detail/:id">
        <Detail items={items}/>
      </Route>

      {/* <Route path="/:id">
        <div>아무거나 적었을 때 이걸 보여준다</div>
      </Route> */}
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
              {/* <img src={props.items[i].img} alt={props.items[i].title} /> */}
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

export default App;
