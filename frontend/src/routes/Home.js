import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Components/css/styles.css";

function Home() {
  const [alert, setAlert] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setAlert("");
    }, 5000);
    return () => clearTimeout(clearMessage);
  }, [alert]);

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
        clearInterval(id);
    }
}, []);

  return (
    <div className="home">
      <header className="home__header">
      <button
        className="btnModal"
        onClick={() => setDisplayModal(!displayModal)}
      >
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <span className="header__title">코로나 오늘</span>
      <div className="header__date">
      {`${dateTime.toLocaleDateString()}`}
      </div>
      </header>
      

      <div className={`Modal ${displayModal ? "Show" : ""}`}>
        <button
          className="btnClose"
          onClick={() => setDisplayModal(!displayModal)}
        >
          <FontAwesomeIcon icon={faTimes}/>
        </button>

        <h3 className="modalTitle">코로나 오늘</h3>
        
        <p className="modalText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
      <div
        className={`Overlay ${displayModal ? "Show" : ""}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
      <p className="Alert">{alert}</p>
    </div>
  );
}

export default Home;


