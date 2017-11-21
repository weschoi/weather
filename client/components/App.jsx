import React from 'react';
import $ from 'jquery';
import dummy from './dummy';
import kelvinToFahrenheit from 'kelvin-to-fahrenheit';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chicago: '',
      miami: '',
      nyc: '',
      seattle: '',
      sf: '',
      cities: ['miami', 'new york city', 'san francisco', 'chicago', 'seattle'],
      selectedCity: 'sf'
    }
  }

  convertAndRound(num){
    return Math.round(kelvinToFahrenheit(num))
  }

  componentWillMount() {
    $.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=4887398&appid=471988b0c33796818cc9ca5568400bbd').done(data => this.setState({chicago: data}));
    $.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=4542692&appid=471988b0c33796818cc9ca5568400bbd').done(data => this.setState({miami: data}));
    $.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=4900961&appid=471988b0c33796818cc9ca5568400bbd').done(data => this.setState({nyc: data}));
    $.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=5809844&appid=471988b0c33796818cc9ca5568400bbd').done(data => this.setState({seattle: data}));
    $.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=5391959&appid=471988b0c33796818cc9ca5568400bbd').done(data => this.setState({sf: data}));

    this.setForecast(4887398, 'chicago');
    this.setForecast(4542692, 'miami');
    this.setForecast(4900961, 'nyc');
    this.setForecast(5809844, 'seattle');
    this.setForecast(5391959, 'sf');
  }

  setForecast(id, city) {


    $.get(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=471988b0c33796818cc9ca5568400bbd`)
      .done(data => {
        let date = new Date().getDay();
        let result = [];
        let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];

        for (let i = date + 1; i < date + 6; i++) {
          result.push(days[i])
        }

        let list = data.list;

        let cityObj = Object.assign({}, this.state[city])
        cityObj.forecast = [
          {day: result[0], temp: this.convertAndRound(list[2].main.temp)}, 
          {day: result[1], temp: this.convertAndRound(list[10].main.temp)}, 
          {day: result[2], temp: this.convertAndRound(list[18].main.temp)}, 
          {day: result[3], temp: this.convertAndRound(list[26].main.temp)}, 
          {day: result[4], temp: this.convertAndRound(list[34].main.temp)}
        ];

        let newObj = function() {
          var obj = {};
          obj[city] = cityObj;
          return obj;
        }

        this.setState(newObj);
      })

  }

  returnCities() {
    return this.state.cities.map((city, index) => <h1 key={index}>{city}</h1>)
  }

  returnForecast(city) {



    // return result.map((day, index) => <div><h1 key={index}>{day}</h1><h1>{this.state[city].forecast[0] ? this.state[city].forecast[index] : 'hi'}</h1></div>)
  }

  render() {
        // {this.returnForecast(this.state.selectedCity)}

    let s = this.state;

    return (
      <div>
        {this.returnCities()}
        {console.log('sf:', s[s.selectedCity])}
        <h1>{s[s.selectedCity].name}</h1>
        <h1>{s[s.selectedCity].main ? this.convertAndRound(s[s.selectedCity].main.temp) : '90'}</h1>
        <h1>{s[s.selectedCity].weather ? s[s.selectedCity].weather[0].description : 'd'}</h1>
        {this.returnForecast(s.selectedCity)}
      </div>
    )
  }
}
