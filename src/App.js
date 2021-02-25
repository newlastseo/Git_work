import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "아무거나",
  ]);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = "여자 코트 추천";
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>Blog 개발</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          {/* <button onClick={제목바꾸기}>변경</button> */}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3
          onClick={() => {
            modal변경(true);
          }}
        >
          {글제목[2]}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고닫기버튼
      </button>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
