import "./App.css";
import { Nav, Jumbotron, Button } from "react-bootstrap";
import React, {useState} from "react";
import ITEM from "./data.js";

function App() {//각 사진 사이즈 같게 하면서 화면 사이즈 변경에도 잘 적응하게 바꾸기
  // let [items, mItems] = useState([]);


  return (
    <div className="App">
      

      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
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

      
      <Jumbotron className="background">
        <h1>Welcome!</h1>
        <p>
          We love analog art goods!
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>


    <div className="wrapper">
      
          {
            ITEM.map( (element, i) => {
              return (
                <div className="item">
                  <img src={ITEM[i].img} />
                  <h4 className="item__title">{ITEM[i].title}</h4>
                  <p>{ITEM[i].price}</p>
                </div>
              );
            })
          }
    </div>

    </div>
  );
}

export default App;
