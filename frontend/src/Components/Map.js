import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import "./css/styles.css"

function NaverMapAPI() {
    return (
      <NaverMap
        className = "naverMap"
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '45%', // 네이버지도 가로 길이
          height: '65vh' // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: 35.954722, lng: 127.670833 }} // 지도 초기 위치
        defaultZoom={7} // 지도 초기 확대 배율
      />
    );
  }
  
  function Map() {
    return (
      <RenderAfterNavermapsLoaded
        ncpClientId={'2xnv5isy9e'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
    );
  }
  
  export default Map;