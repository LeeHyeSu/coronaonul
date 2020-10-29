import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus, faVial, faFileAlt, faHeadSideCough, faHeart, faDatabase } from "@fortawesome/free-solid-svg-icons";
import "../Components/css/styles.css";
import Position from "./Position";

function Nav() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
      }, []);

    return(
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
          <Position />
        </div>

        <ul className="nav__lists">
          <li className="nav__list">
            <Router>
              <Link to="/" className="text-link">
                <div className="nav__icon"><FontAwesomeIcon icon={faFileAlt} className="nav-icon"/></div>
                <div className="nav__listTitle">코로나 현황</div>
              </Link>
            </Router>
              
          </li>
          <li className="nav__list">
            <Router>
              <Link to="/symptoms" className="text-link">
                <div className="nav__icon"><FontAwesomeIcon icon={faHeadSideCough} className="nav-icon" /></div>
                <div className="nav__listTitle">증상</div>
              </Link>
            </Router>
          </li>
          <li className="nav__list">
            <Router>
              <Link to="/selftest" className="text-link">
                <div className="nav__icon"><FontAwesomeIcon icon={faVial} className="nav-icon" /></div>
                <div className="nav__listTitle">자가테스트</div>
              </Link>
            </Router>
          </li>
          <li className="nav__list">
            <Router>
              <Link to="/prevention" className="text-link">
                <div className="nav__icon"><FontAwesomeIcon icon={faHeart} className="nav-icon" /></div>
                <div className="nav__listTitle">코로나 예방법</div>
              </Link>
            </Router>
          </li>
          <li className="nav__list">
            <Router>
              <Link to="/source" className="text-link">
                <div className="nav__icon"><FontAwesomeIcon icon={faDatabase} className="nav-icon" /></div>
                <div className="nav__listTitle">출처</div>
              </Link>
            </Router>
          </li>
        </ul>
      </div>
    );
}

export default Nav;