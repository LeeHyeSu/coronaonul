import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../routes/Home'
import dotenv from 'dotenv';

dotenv.config();

class Position extends React.Component {
    state = {
      lat: null,
      lon: null,
      main: '',
      name: '',
      temp: '',
      feels_like: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
      errorNavMessage: '',
      errorOpenWeatherMessage: ''
    };
  
    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
          )
            .then(res => {
              return res.json();
            })
            .then(result => {
              const {
                main: { temp, feels_like, temp_min, temp_max, humidity },
                weather: [{ main }]
              } = result;
              const { name } = result;
              this.setState({
                main: main,
                name: name,
                temp: temp,
                feels_like: feels_like,
                temp_min: temp_min,
                temp_max: temp_max,
                humidity: humidity
              });
            })
            .then(err => this.setState({ errorOpenWeatherMessage: err }));
        },
        error => this.setState({ errorMessage: error.message })
      );
    }
  
    getContent() {
      if (!this.state.errorMessage && this.state.lat) {
        return (
          <Home
            lat={this.state.lat}
            lon={this.state.lon}
            main={this.state.main}
            name={this.state.name}
            temp={this.state.temp}
            feels_like={this.state.feels_like}
            temp_min={this.state.temp_min}
            temp_max={this.state.temp_max}
            humidity={this.state.humidity}
          ></Home>
        );
      }
      if (this.state.errorMessage && !this.state.lat) {
        return <div>{this.state.errorMessage}</div>;
      }
  
      return <Home message="Please accept location request!"></Home>;
    }
  
    render() {
      return <div>{this.getContent()}</div>;
    }
  }
  
  ReactDOM.render(<Position />, document.querySelector('#root'));