import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faVial, faFileAlt, faHeadSideCough, faHeart, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "../Components/css/styles.css";
import Map from "../Components/Map"

function Symptoms() {
  const [dateTime, setDateTime] = useState(new Date());
  // const [lat, setLat] = useState(null);
  // const [lon, setLon] = useState(null);
  // const [city, setCity] = useState("");
  // const API_KEY = "f3c59f07aa3c3d51508dd682e2c66808";

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
        clearInterval(id);
    }
  }, []);

  // useEffect(()=> {
  //   window.navigator.geolocation.getCurrentPosition(
  //     position => {
  //       setLat(position.coords.latitude),
  //       setLon(position.coords.longitude)

  //       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`)
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(result => {
  //         const {city} = result;
  //         setCity(city);
  //       })
  //     })
    
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
          city
        </div>
          <ul className="nav__lists">
            <li className="nav__list">
              <div className="nav__icon"><FontAwesomeIcon icon={faFileAlt} /></div>
                <Router>
                  <Link to="/" className="text-link">코로나 현황</Link>
                </Router>
            </li>
            <li className="nav__list">
              <div className="nav__icon"><FontAwesomeIcon icon={faHeadSideCough} /></div>
                <Router>
                  <Link to="/symptoms" className="text-link">증상</Link>
                </Router>
            </li>
            <li className="nav__list">
              <div className="nav__icon"><FontAwesomeIcon icon={faVial} /></div>
                <Router>
                  <Link to="/selftest" className="text-link">자가테스트</Link>
                </Router>
            </li>
            <li className="nav__list">
              <div className="nav__icon"><FontAwesomeIcon icon={faHeart} /></div>
                <Router>
                  <Link to="/prevention" className="text-link">코로나 예방법</Link>
                </Router>
            </li>
            <li className="nav__list">
              <div className="nav__icon"><FontAwesomeIcon icon={faDatabase} /></div>
                <Router>
                  <Link to="/source" className="text-link">출처</Link>
                </Router>
            </li>
          </ul>
      </div>

      <main className="main">
        증상 페이지 입니다.
      </main>
      
    </div>
  );
}

export default Symptoms;


