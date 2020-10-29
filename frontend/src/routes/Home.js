import React, {useState, useEffect} from 'react';
import Map from "../Components/Map";
import Nav from "../Components/Nav";
import "../Components/css/styles.css";


const content = [
  {
    tab: "오늘",
    content: ["오늘 확진자", "오늘 검사중", "오늘 완치자", "오늘 사망자"]
  },
  {
    tab: " | "
  },
  {
    tab: "누적",
    content: ["누적 확진자", "누적 검사중", "누적 완치자", "누적 사망자"]
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
        <div className="main__header">
          {content.map((section, index) => (
            <span className="figure-toggle" onClick={() => changeItem(index)}>{section.tab}</span>
          ))}
        </div>

        <div className="city-cards">
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
        </div>
        <div className="nation-cards">
          <div className="nation-card">
            <span className="card__title">서울</span>
          </div>
          <div className="nation-card">
            <span className="card__title">부산</span>
          </div>
          <div className="nation-card">
            <span className="card__title">대구</span>
          </div>
          <div className="nation-card">
            <span className="card__title">인천</span>
          </div>
          <div className="nation-card">
            <span className="card__title">광주</span>
          </div>
          <div className="nation-card">
            <span className="card__title">대전</span>
          </div>
          <div className="nation-card">
            <span className="card__title">울산</span>
          </div>
          <div className="nation-card">
            <span className="card__title">세종</span>
          </div>
          <div className="nation-card">
            <span className="card__title">경기</span>
          </div>
          <div className="nation-card">
            <span className="card__title">강원</span>
          </div>
          <div className="nation-card">
            <span className="card__title">충북</span>
          </div>
          <div className="nation-card">
            <span className="card__title">충남</span>
          </div>
          <div className="nation-card">
            <span className="card__title">전북</span>
          </div>
          <div className="nation-card">
            <span className="card__title">전남</span>
          </div>
          <div className="nation-card">
            <span className="card__title">경북</span>
          </div>
          <div className="nation-card">
            <span className="card__title">경남</span>
          </div>
          <div className="nation-card">
            <span className="card__title">제주</span>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default Home;


