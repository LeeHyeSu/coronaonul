import React, { useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Graph from "../Components/Graph";
import axios from "axios";
import "../Components/css/styles.css";

const Home = () => {
  useEffect(() => {
    getFigure();
  }, []);

  const getFigure = () => {
    axios
      .get("")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="home">
      <Nav />
      <main className="main">
        <div className="detail__wrap">
          <div className="detail__content">
            <div className="chart__left">
              <span className="graph__title">
                전국 일일 확진자 발생 추이 그래프
              </span>
              <Graph />
            </div>
            <hr className="divider"></hr>
            <div className="chart__right">
              <div className="chart-title">전국 코로나 현황</div>
              <div className="chart">
                <div className="chart__row">
                  <div className="chart__figure">
                    <span classNames="chart__title">누적 확진자</span>
                    <span className="figure__num confirmed">6,235</span>
                  </div>
                  <div className="chart__figure">
                    <span classNames="chart__title">치료중</span>
                    <span className="figure__num testing">530</span>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">퇴원</div>
                    <div className="figure__num recovered">5,627</div>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">사망</div>
                    <div className="figure__num death">78</div>
                  </div>
                </div>
                <div className="chart__row">
                  <div className="chart__figure">
                    <div classNames="chart__title">오늘 확진자</div>
                    <div className="figure__num confirmed">40</div>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">지역발생</div>
                    <div className="figure__num confirmed">30</div>
                  </div>
                  <div className="chart__figure">
                    <div classNames="chart__title">해외유입</div>
                    <div className="figure__num confirmed">10</div>
                  </div>
                </div>
              </div>
              <span
                className="more"
                onClick={() => window.open("http://ncov.mohw.go.kr/", "_blank")}
              >
                더 알아보기
              </span>
            </div>
          </div>
        </div>
        <div className="nation-cards">
          <div className="nation-card">
            <Router>
              <Link to="/detail" style={{ textDecoration: "none" }}>
                <span className="card__title">서울</span>
                <div className="card__figure">
                  <div className="confirmed">
                    <span className="figure-title">확진자</span>
                    <div className="figure-num">+13</div>
                  </div>
                  <div className="card__bottom">
                    <div className="testing">
                      <span className="figure-title">지역 발생</span>
                      <span className="figure-num">13</span>
                    </div>
                    <div className="testing">
                      <span className="figure-title">해외 유입</span>
                      <span className="figure-num">0</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Router>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "http://www.busan.go.kr/covid19/Corona19.do",
                  "_blank"
                )
              }
            >
              부산
            </span>
            <div className="card__figure"></div>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open("http://covid19.daegu.go.kr/", "_blank")
              }
            >
              대구
            </span>
            <div className="card__figure"></div>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "https://www.incheon.go.kr/health/HE020409",
                  "_blank"
                )
              }
            >
              인천
            </span>
            <div className="card__figure"></div>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open("https://www.gwangju.go.kr/c19/", "_blank")
              }
            >
              광주
            </span>
            <div className="card__figure"></div>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "https://www.daejeon.go.kr/corona19/index.do",
                  "_blank"
                )
              }
            >
              대전
            </span>
            <div className="card__figure"></div>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open("http://www.ulsan.go.kr/corona.jsp", "_blank")
              }
            >
              울산
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "https://www.sejong.go.kr/bbs/R3273/list.do;jsessionid=TkEBjZ7uuRa9ggO9rKnMhqAgabvrRlXxModIjYh0paAI1bYfVbcUb6afegQHpm4C.Portal_WAS2_servlet_engine5?cmsNoStr=17465",
                  "_blank"
                )
              }
            >
              세종
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "https://www.gg.go.kr/contents/contents.do?ciIdx=1150&menuId=2909",
                  "_blank"
                )
              }
            >
              경기
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "http://www.provin.gangwon.kr/covid-19.html",
                  "_blank"
                )
              }
            >
              강원
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "http://www1.chungbuk.go.kr/covid-19/index.do",
                  "_blank"
                )
              }
            >
              충북
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "http://www.chungnam.go.kr/coronaStatus.do",
                  "_blank"
                )
              }
            >
              충남
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "https://www.jeonbuk.go.kr/board/list.jeonbuk?boardId=BBS_0000105&menuCd=DOM_000000110001000000&contentsSid=1219&cpath=",
                  "_blank"
                )
              }
            >
              전북
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "https://www.jeonnam.go.kr/coronaMainPage.do",
                  "_blank"
                )
              }
            >
              전남
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "http://www.gb.go.kr/Main/open_contents/section/wel/page.do?mnu_uid=5857&LARGE_CODE=360&MEDIUM_CODE=90&SMALL_CODE=10&mnu_order=2",
                  "_blank"
                )
              }
            >
              경북
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open(
                  "http://xn--19-q81ii1knc140d892b.kr/main/main.do",
                  "_blank"
                )
              }
            >
              경남
            </span>
          </div>
          <div className="nation-card">
            <span
              className="card__title"
              onClick={() =>
                window.open("https://www.jeju.go.kr/corona19.jsp", "_blank")
              }
            >
              제주
            </span>
          </div>
          <div className="nation-card">
            <span className="card__title">검역</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
