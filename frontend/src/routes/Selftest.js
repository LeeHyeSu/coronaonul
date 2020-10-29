import React, {useState, useEffect} from 'react';
import Nav from "../Components/Nav";
import "../Components/css/styles.css";

function Selftest() {
  return (
    <div className="home">
      <Nav />

      <main className="main">
        자가테스트 페이지 입니다.
      </main>
      
    </div>
  );
}

export default Selftest;