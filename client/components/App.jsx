import React from 'react';
import $ from 'jquery';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chicago: '',
      miami: '',
      'new york city': '',
      seattle: '',
      'san francisco': '',
      cities: ['miami', 'new york city', 'san francisco', 'chicago', 'seattle'],
      selectedCity: 'san francisco'
    }
  }

  componentWillMount() {
    $.get('https://api.apixu.com/v1/forecast.json?key=165181a757d242c882d50843172111&q=chicago&days=6').done(data => this.setState({chicago: data}));
    $.get('https://api.apixu.com/v1/forecast.json?key=165181a757d242c882d50843172111&q=miami&days=6').done(data => this.setState({miami: data}));
    $.get('https://api.apixu.com/v1/forecast.json?key=165181a757d242c882d50843172111&q=new york city&days=6').done(data => this.setState({'new york city': data}));
    $.get('https://api.apixu.com/v1/forecast.json?key=165181a757d242c882d50843172111&q=seattle&days=6').done(data => this.setState({seattle: data}));
    $.get('https://api.apixu.com/v1/forecast.json?key=165181a757d242c882d50843172111&q=94121&days=6').done(data => this.setState({'san francisco': data}));
  }

  getDays() {
    let date = new Date().getDay();
    let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];

    return days.slice(date+1, date+6)
  }

  getForecast() {

    let state = this.state;
    let selectedCity = state.selectedCity;

    return state[selectedCity] ? this.getDays().map((day, index) =>
      <div key={index}>
        <h1>{day}</h1>
        <div id="line"></div>
        <hr></hr>
        <h1>{state[selectedCity].forecast.forecastday[index+1].day.avgtemp_f}</h1>
      </div>
    ) : ''
    
  }

  returnCities() {
    return this.state.cities.map((city, index) => <h1 key={index} onClick={() => this.switchCity(city)}>{city}</h1>)
  }

  switchCity(city) {
    this.setState({selectedCity: city})
  }

  render() {
    let state = this.state;
    let selectedCity = state.selectedCity;

    return (
      <div>
        <div>{this.returnCities()}</div>
        <div>
          <h1>{state[selectedCity] ? state[selectedCity].current.temp_f : ''}</h1>
          <h1>{state[selectedCity] ? state[selectedCity].current.condition.text : ''}</h1>
        </div>
        <div>
          <h1>Forecast</h1>
          {this.getForecast()}
        </div>
      </div>
    )
  }
}

