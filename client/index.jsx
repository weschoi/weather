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
      time: '',
      brightness: "",
      gradient1: '',
      gradient2: '',
      mountain: '',
      mountain2: ''
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
    let hour = new Date().getHours();

    let fourAM = {
      dark: {
        r: 33, g: 16, b: 61
      },
      light: { 
        r: 47, g: 47, b: 99
      },
      mountain: {
        r: 49, g: 37, b: 59
      }
    }

    let noon = {
      dark: { 
        r: 109, g: 188, b: 201
      },
      light: { 
        r: 253, g: 221, b: 160
      },
      mountain: {
        r: 209, g: 147, b: 88
      }
    }

    let eightPM = {
      dark: { 
        r: 133, g: 101, b: 122
      },
      light: { 
        r: 227, g: 154, b: 173
      },
      mountain: {
        r: 79, g: 66, b: 92
      }
    }

    let gradient = hour >= 4 && hour <= 11 ? {1: fourAM, 2: noon} : hour >=12 && hour <= 19 ? {1: noon, 2: eightPM} : {1: eightPM, 2: fourAM};
    let mountainColors = 
    this.setState({time: new Date().getHours()});
    this.setGradient(gradient, hour);
  }

  setGradient(gradient, hour) {

    let one = gradient[1];
    let two = gradient[2];

    let darkR = this.setGradientHelper(one.dark.r, two.dark.r, hour);
    let darkG = this.setGradientHelper(one.dark.g, two.dark.g, hour);
    let darkB = this.setGradientHelper(one.dark.b, two.dark.b, hour);

    let lightR = this.setGradientHelper(one.light.r, two.light.r, hour);
    let lightG = this.setGradientHelper(one.light.g, two.light.g, hour);
    let lightB = this.setGradientHelper(one.light.b, two.light.b, hour);

    let mountainR = this.setGradientHelper(one.mountain.r, two.mountain.r, hour);
    let mountainG = this.setGradientHelper(one.mountain.g, two.mountain.g, hour);
    let mountainB = this.setGradientHelper(one.mountain.b, two.mountain.b, hour);

    this.setState({
      gradient1: `rgb(${darkR}, ${darkG}, ${darkB})`, 
      gradient2: `rgb(${lightR}, ${lightG}, ${lightB})`, 
      mountain1: `rgba(${mountainR}, ${mountainG}, ${mountainB}, 0)`,
      mountain2: `rgba(${mountainR}, ${mountainG}, ${mountainB}, 1)`
    })
  }

  setGradientHelper(num1, num2, hour) {
    return Math.round(num1 + ((num2 - num1)/8) * (hour - 12));
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
      <div style={{backgroundImage: `linear-gradient(180deg, ${this.state.gradient1} 0%, ${this.state.gradient2} 50%, ${this.state.gradient2} 100%)`}}>
        <div className="row no-gutters justify-content-center align-items-center" style={{background: `linear-gradient(0deg, ${this.state.mountain2}, ${this.state.mountain1}), url('../img/3.png') center center no-repeat`}}>
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