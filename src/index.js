import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";
//HashRouter/#/ 있음 더 안전함. #뒤에 적는 것은 서버로 전달되지 않는다.
//vs BrowserRouter/#/ 없음 가끔 서버에 요청할 수도 있어서 위험하다. 서버에서 서버 라우팅 방지하는 API를 작성해야함
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
