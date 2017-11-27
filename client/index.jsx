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
      mountain2: '',
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
    let days = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun', 'mon', 'tues', 'wed', 'thur'];

    return days.slice(date+1, date+6)
  }

  getForecast() {
    let state = this.state;
    let selectedCity = state.selectedCity;

    return state[selectedCity] ? this.getDays().map((day, index) => {
      return (
        <div key={index}>
          <h1>{day}</h1>
          <img 
            src={`../img/${this.getIcon(state[selectedCity].forecast.forecastday[index+1].day.condition.text)}`} 
            height="25" 
            width="25" 
            style={{margin: '3px 0px', opacity: '0.5'}}>
          </img>
          <h1>{Math.round(state[selectedCity].forecast.forecastday[index+1].day.avgtemp_f)}</h1>
        </div>
      )
    }) : ''
  }

  getIcon(condition, index) {
    if (condition === 'Partly cloudy') {
      return 'w-partly.png'
    } else if (condition === 'Moderate or heavy rain shower' || condition === 'Moderate rain at times') {
      return 'w-moderate.png'
    } else if (condition === 'Cloudy') {
      return 'w-cloudy.png'
    } else if (condition === 'Patchy rain possible') {
      return 'w-patchy.png'
    } else if (condition === 'Freezing fog' || condition === 'Fog') {
      return 'w-fog.png'
    } else {
      return 'w-everythingelse.png'
    }
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

    let midnight = {

    }

    let elevenPM = {

    }

    let gradient = hour >= 4 && hour <= 11 ? {1: fourAM, 2: noon, cutoff: 4} : hour >=12 && hour <= 19 ? {1: noon, 2: eightPM, cutoff: 12} : {1: eightPM, 2: fourAM, cutoff: 20};
    this.setState({time: new Date().getHours()});
    this.setGradient(gradient, hour);
  }

  setGradient(gradient, hour) {
    let one = gradient[1];
    let two = gradient[2];

    let bright = {
      r: 251, g: 246, b: 216
    }

    let sunset = {
      r: 253, g: 124, b: 119
    }

    let darkR = this.setGradientHelper(one.dark.r, two.dark.r, hour, gradient.cutoff);
    let darkG = this.setGradientHelper(one.dark.g, two.dark.g, hour, gradient.cutoff);
    let darkB = this.setGradientHelper(one.dark.b, two.dark.b, hour, gradient.cutoff);

    let lightR = this.setGradientHelper(one.light.r, two.light.r, hour, gradient.cutoff);
    let lightG = this.setGradientHelper(one.light.g, two.light.g, hour, gradient.cutoff);
    let lightB = this.setGradientHelper(one.light.b, two.light.b, hour, gradient.cutoff);

    let mountainR = this.setGradientHelper(one.mountain.r, two.mountain.r, hour, gradient.cutoff);
    let mountainG = this.setGradientHelper(one.mountain.g, two.mountain.g, hour, gradient.cutoff);
    let mountainB = this.setGradientHelper(one.mountain.b, two.mountain.b, hour, gradient.cutoff);

    let sunR = this.getSunColors(bright.r, sunset.r, hour);
    let sunG = this.getSunColors(bright.g, sunset.g, hour);
    let sunB = this.getSunColors(bright.b, sunset.b, hour);

    this.setState({
      gradient1: `rgb(${darkR}, ${darkG}, ${darkB})`, 
      gradient2: `rgb(${lightR}, ${lightG}, ${lightB})`, 
      mountain1: `rgba(${mountainR}, ${mountainG}, ${mountainB}, 0)`,
      mountain2: `rgba(${mountainR}, ${mountainG}, ${mountainB}, 1)`,
      sun: `rgb(${sunR}, ${sunG}, ${sunB})`
    })
  }

  setGradientHelper(num1, num2, hour, cutoff) {
    let newHour = hour;
    if (hour >= 0 && hour <= 3) newHour += (23 + hour);
    return Math.round(num1 + ((num2 - num1)/8) * (newHour - cutoff));
  }

  getSunColors(bright, sunset, hour) {
    if (hour >= 7 && hour <= 12) {
      return Math.round(bright - ((sunset - bright)/6) * (hour - 7))
    } else if (hour >= 13 && hour <= 18) {
      return Math.round(bright + ((sunset - bright)/6) * (hour - 13))
    } else {
      return 0
    }
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
    var style = {};

    if (state.time >= 7 && state.time <= 18) {
      style = {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><filter id='f1'><feGaussianBlur in='SourceGraphic' stdDeviation='1' /></filter><circle cx='25' cy='25' r='21' fill='${this.state.sun}' filter='url(#f1)'/></svg>"), linear-gradient(180deg,${this.state.gradient1} 0%, ${this.state.gradient2} 50%, ${this.state.gradient2} 100%)`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: '15%, 100%',
        backgroundPosition: '15% 35%, top'
      }
    } else {
      style = {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><filter id='f1'><feGaussianBlur in='SourceGraphic' stdDeviation='1' /></filter><circle cx='25' cy='25' r='21' fill='${this.state.sun}' filter='url(#f1)'/></svg>"), linear-gradient(180deg,${this.state.gradient1} 0%, ${this.state.gradient2} 50%, ${this.state.gradient2} 100%)`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: '15%, 100%',
        backgroundPosition: '15% 35%, top'
      } 
    }

    return (
      <div style={style}>
        <div className="row no-gutters justify-content-center align-items-center" style={{background: `linear-gradient(0deg, ${this.state.mountain2}, ${this.state.mountain1}), url('../img/3.png') center center no-repeat`}}>
          <div className="col-sm-6 col-10">
            <div>{this.returnCities()}</div>
            <div>
              <h1>{state[selectedCity] ? Math.round(state[selectedCity].current.temp_f) : ''}&#176;</h1>
              <h1>{state[selectedCity] ? state[selectedCity].current.condition.text : ''}</h1>
            </div>
            <div>
              <div>
                <div>Forecast</div>
                <div>{this.getForecast()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('container-fluid')[0]);