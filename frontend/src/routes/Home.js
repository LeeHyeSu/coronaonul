import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Link } from "react-router-dom";
import Map from "../Components/Map";
import Nav from "../Components/Nav";
import "../Components/css/styles.css";

const content = [
  {
    tab: "오늘",
    content: ["+10", "+20", "+5", "+2"]
  },
  {
    tab: " | "
  },
  {
    tab: "누적",
    content: ["100", "200", "300", "15"]
  }
]

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const Home = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="home">
      <Nav />

      <main className="main">
        {/* <div className="main__header">
          {content.map((section, index) => (
            <span className="figure-toggle" onClick={() => changeItem(index)}>{section.tab}</span>
          ))}
        </div> */}

        {/* <div className="city-cards">
          <div className="city-card">
            <span className="card__title">확진자</span>
            <div className="city-figure confirmed">
              {currentItem.content[0]}
            </div>
          </div>
          
          <div className="city-card">
            <span className="card__title">검사중</span>
            <div className="city-figure testing">
              {currentItem.content[1]}
            </div>
          </div>
          <div className="city-card">
            <span className="card__title">완치자</span>
            <div className="city-figure recovered">
              {currentItem.content[2]}
            </div>
          </div>
          <div className="city-card">
            <span className="card__title">사망자</span>
            <div className="city-figure death">
              {currentItem.content[3]}
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <div className="map">
            <Map />
          </div>
        </div> */}
        <div className="nation-cards">
          <div className="nation-card">
            <Router>
              <Link to="/detail">
                <span className="card__title" onClick={() => window.open("https://www.seoul.go.kr/coronaV/coronaStatus.do", "_blank")}>서울</span>
                <div className="card__figure">
                  <div className="confirmed">
                    <span className="figure-title">확진자</span>
                    <div className="figure-num">+13</div>
                  </div>
                  <div className="card__bottom">
                    <div className="testing">
                      <span className="figure-title">지역 발생</span>
                      <span className="figure-num">
                        13
                      </span>
                    </div>
                    <div className="testing">
                      <span className="figure-title">해외 유입</span>
                      <span className="figure-num">
                        0
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Router>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://www.busan.go.kr/covid19/Corona19.do", "_blank")}>부산</span>
            <div className="card__figure">
            </div>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://covid19.daegu.go.kr/", "_blank")}>대구</span>
            <div className="card__figure">
            </div>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.incheon.go.kr/health/HE020409", "_blank")}>인천</span>
            <div className="card__figure">
            </div>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.gwangju.go.kr/c19/", "_blank")}>광주</span>
            <div className="card__figure">
            </div>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.daejeon.go.kr/corona19/index.do", "_blank")}>대전</span>
            <div className="card__figure">
            </div>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://www.ulsan.go.kr/corona.jsp", "_blank")}>울산</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.sejong.go.kr/bbs/R3273/list.do;jsessionid=TkEBjZ7uuRa9ggO9rKnMhqAgabvrRlXxModIjYh0paAI1bYfVbcUb6afegQHpm4C.Portal_WAS2_servlet_engine5?cmsNoStr=17465", "_blank")}>세종</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.gg.go.kr/contents/contents.do?ciIdx=1150&menuId=2909", "_blank")}>경기</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://www.provin.gangwon.kr/covid-19.html", "_blank")}>강원</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://www1.chungbuk.go.kr/covid-19/index.do", "_blank")}>충북</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://www.chungnam.go.kr/coronaStatus.do", "_blank")}>충남</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.jeonbuk.go.kr/board/list.jeonbuk?boardId=BBS_0000105&menuCd=DOM_000000110001000000&contentsSid=1219&cpath=", "_blank")}>전북</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.jeonnam.go.kr/coronaMainPage.do", "_blank")}>전남</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://www.gb.go.kr/Main/open_contents/section/wel/page.do?mnu_uid=5857&LARGE_CODE=360&MEDIUM_CODE=90&SMALL_CODE=10&mnu_order=2", "_blank")}>경북</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("http://xn--19-q81ii1knc140d892b.kr/main/main.do", "_blank")}>경남</span>
          </div>
          <div className="nation-card">
            <span className="card__title" onClick={() => window.open("https://www.jeju.go.kr/corona19.jsp", "_blank")}>제주</span>
          </div>
          <div className="nation-card">
            <span className="card__title">검역</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;


