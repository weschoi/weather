import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      what: '',
    }
  }

  componentWillMount() {
    $.get({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco&appid=471988b0c33796818cc9ca5568400bbd', (data, status) => {
        console.log('data', data);
        console.log('status', status)
      }
    });

    // $.get('http://api.openweathermap.org/data/2.5/weather?q=sanfrancisco&appid=471988b0c33796818cc9ca5568400bbd').done((data) => console.log(data));
    // $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=471988b0c33796818cc9ca5568400bbd',
    //       function(data, status){
    //         console.log(data, status)
    //       });
    console.log('hi');
  }

  render() {
    return (
      <h1>hi</h1>
    )
  }
}