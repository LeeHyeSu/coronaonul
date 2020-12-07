import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import NationCard from "../Components/NationCard";
import CountryCard from "../Components/CountryCard";
import axios from "axios";
import "../Components/css/styles.css";
import styled from "styled-components";

const NationCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 100%;
  position: relative;
  top: 100px;
  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    top: 300px;
  }
`;

const Home = () => {
  const [data, loading] = useState([]);
  useEffect(() => {
    getFigure();
  }, []);

  const getFigure = () => {
    axios
      .get("http://localhost:8080/coronaonul")
      .then(({ data }) => {
        loading(data);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="home">
      <Nav />
      <main className="main">
        <CountryCard />
        <NationCards>
          {data
            ?.map((d) => (
              <NationCard
                gubun={d.gubun}
                incDec={d.incDec}
                localOccCnt={d.localOccCnt}
                overFlowCnt={d.overFlowCnt}
              />
            ))
            .reverse()
            .slice(1, 19)}
        </NationCards>
      </main>
    </div>
  );
};

export default Home;
