import React from 'react';
import dotenv from 'dotenv';

dotenv.config();

class Position extends React.Component {
  state = {
    lat: undefined,
    lon: undefined,  
    // tempC: undefined,
    city: undefined,
    country: undefined,
    errorMessage: undefined
  };
  
  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
      .then((position) => {      
        this.getWeather(position.coords.latitude, position.coords.longitude)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
    }
    else {
      alert("Geolocation not available");
    }
    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      600000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getWeather = async (lat, lon) => {     
    const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f3c59f07aa3c3d51508dd682e2c66808&units=metric`);
    const data = await api_call.json();
    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      // tempC: Math.round(data.main.temp),
    })
  }
  
  render() {
    if (this.state.city) {
      return (
        <div className="weather">   
          <div>
            <span className="weather-item">{this.state.city}</span> 
            <span className="weather-item">
              {/* {this.state.tempC} &deg;C  */}
            </span>            
          </div>
        </div>         
      )
    }
    else {
      return null;
    }
  }
} 
  
export default Position;