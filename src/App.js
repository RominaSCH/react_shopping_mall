import logo from "./logo.svg";
import "./App.css";
import { Nav, Jumbotron, Button } from "react-bootstrap";

function App() {//각 사진 사이즈 같게 하면서 화면 사이즈 변경에도 잘 적응하게 바꾸기
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

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img width="100%" src="https://artnmall.com/data/item/1592965441/7J207IKs67Kg7J207IiY7LGE7ZmU67aT62347Iuc66as7KaI64Kx7J6Q66Oo.jpg" />
          <h4>Isabey brush</h4>
          <p>18,000 ₩</p>
        </div>
        <div className="col-md-4">
        <img width="100%" src="https://m.media-amazon.com/images/I/71WtJQ3iYkL._AC_.jpg" />
          <h4>White Nights watercolor</h4>
          <p>38,000 ₩</p>
        </div>
        <div className="col-md-4">
        <img width="100%" src="https://rawmaterials.b-cdn.net/catimg/mz92-wp3018b_x.jpg" />
          <h4>Mijello palette</h4>
          <p>5,000 ₩</p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
