import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faVial, faFileAlt, faHeadSideCough, faHeart, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "../Components/css/styles.css";
import Map from "../Components/Map"

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

const Home = (props) => {
  const [dateTime, setDateTime] = useState(new Date());
  const { currentItem, changeItem } = useTabs(0, content);
  // const [overlay, setOverlay] = useState(false);
  const { lat, lon, name, temp } = props;
  // const initialLocationState = {
  //   lat: null,
  //   lng: null
  // }
  // const [{lat, lng}, setLocation] = useState(initialLocationState);
  // let geolocationMounted = true;

  // const handleGeolocation = e => {
  //   if(geolocationMounted) {
  //     setLocation({
  //       lat: e.coords.latitude,
  //       lng: e.coords.longitude
  //     })
  //   }
  // }
  


  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
        clearInterval(id);
    }
  }, []);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(handleGeolocation);
  //   const geolocationWatchId = navigator.geolocation.watchPosition(handleGeolocation);
  
  //   return() => {
  //     geolocationMounted = false;
  //     navigator.geolocation.clearWatch(geolocationWatchId);
  //   }
  // }, []);


  return (
    <div className="home">
      <div className="home__nav">
        <div className="nav__title">
          <div className="nav__icon"><FontAwesomeIcon icon={faVirus} size="2x"/></div>
            <Router>
              <Link to="/" className="text-link">코로나오늘</Link>
            </Router>
        </div>

        <div className="nav__date">
          {`${dateTime.toLocaleDateString()}`}
        </div>

        <div className="nav__city">
          {/* {lat}, {lng} */}
          {/* {lat}, {lon}, {name}, {temp} */}
          city
        </div>
          <ul className="nav__lists">
            <li className="nav__list">
              <Router>
                <Link to="/" className="text-link">
                  <div className="nav__icon"><FontAwesomeIcon icon={faFileAlt} /></div>
                  <div className="nav__listTitle">코로나 현황</div>
                </Link>
              </Router>
                
            </li>
            <li className="nav__list">
              <Router>
                <Link to="/symptoms" className="text-link">
                  <div className="nav__icon"><FontAwesomeIcon icon={faHeadSideCough} /></div>
                  <div className="nav__listTitle">증상</div>
                </Link>
              </Router>
            </li>
            <li className="nav__list">
              <Router>
                <Link to="/selftest" className="text-link">
                  <div className="nav__icon"><FontAwesomeIcon icon={faVial} /></div>
                  <div className="nav__listTitle">자가테스트</div>
                </Link>
              </Router>
            </li>
            <li className="nav__list">
              <Router>
                <Link to="/prevention" className="text-link">
                  <div className="nav__icon"><FontAwesomeIcon icon={faHeart} /></div>
                  <div className="nav__listTitle">코로나 예방법</div>
                </Link>
              </Router>
            </li>
            <li className="nav__list">
              <Router>
                <Link to="/source" className="text-link">
                  <div className="nav__icon"><FontAwesomeIcon icon={faDatabase} /></div>
                  <div className="nav__listTitle">출처</div>
                </Link>
              </Router>
            </li>
          </ul>
      </div>

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
          <div className="map">지도</div>
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


