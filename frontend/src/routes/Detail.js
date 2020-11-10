import React from 'react';
import Nav from "../Components/Nav";
import Graph from "../Components/Graph";
import "../Components/css/styles.css";

function Detail() {
    return(
        <div className="home">
            <Nav />
            <main className="detail__main">
                <div className="detail__wrap">
                    <div className="detail__header">
                        <h2 className="detail__krTitle">서울</h2>
                        <h2 className="detail__enTitle">(Seoul) 코로나 현황</h2>
                    </div>
                    <div className="detail__chart">
                        <div className="chart__left">
                            <span className="graph__title">서울시 일일 확진자 발생 추이 그래프</span>       
                            <Graph /> 
                        </div>
                        <hr className="divider"></hr>
                        <div className="chart__right">
                            <div className='chart-title'>서울 코로나 현황</div>
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
                            <span className="more" onClick={() => window.open("https://www.seoul.go.kr/coronaV/coronaStatus.do", "_blank")}>더 알아보기</span>   
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Detail;