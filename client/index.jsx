import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chicago: '',
      miami: '',
      'new york city': '',
      seattle: '',
      'san francisco': '',
      cities: ['miami', 'new york city', 'san francisco', 'chicago', 'seattle'],
      selectedCity: 'san francisco',
      time: ''
    }
  }

  componentWillMount() {
    this.getTime();

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
        <h1>{Math.round(state[selectedCity].forecast.forecastday[index+1].day.avgtemp_f)}</h1>
      </div>
    ) : ''
    
  }

  getTime() {
    this.setState({time: new Date().getHours() });
}

  returnCities() {
    return this.state.cities.map((city, index) => {
      if (city === this.state.selectedCity) {
        return <div key={index} style={{opacity: '1'}} onClick={() => this.switchCity(city)}>{city}</div>
      } else {
        return <div key={index} style={{opacity: '0.5'}} onClick={() => this.switchCity(city)}>{city}</div>
      }
    })
  }

  switchCity(city) {
    this.setState({selectedCity: city})
  }

  render() {
    let state = this.state;
    let selectedCity = state.selectedCity;

    return (
      <div>
        <div className="row no-gutters justify-content-center align-items-center">
          <div className="col-sm-6 col-10">
            <div>{this.returnCities()}</div>
            <div>
              <h1>{state[selectedCity] ? Math.round(state[selectedCity].current.temp_f) : ''}&#176;</h1>
              <h1>{state[selectedCity] ? state[selectedCity].current.condition.text : ''}</h1>
            </div>
            <div>
              {this.getForecast()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('container-fluid')[0]);