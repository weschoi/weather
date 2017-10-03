import React from 'react';
import roundTo from 'round-to';
// const roundTo = require('round-to');


export default class Sexy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      result: '',
      record: '',
      time: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleClick(num) {
    if (num === '-' && this.state.record[this.state.record.length-1] === '-') {
      this.setState({record: this.state.record.slice(0, this.state.record.length-1) });
    } else {
      this.setState({record: this.state.record + num});
    }
  }

  handleClear() {
    this.state.record[this.state.record.length-1] === ' ' ? this.setState({record: this.state.record.slice(0, this.state.record.length-3) }) : this.setState({record: this.state.record.slice(0, this.state.record.length-1) });
  }

  handleEnter() {
    let resultNumber = eval(this.state.record);
    let resultString = eval(this.state.record).toString();

    if (resultString.includes('e')) {
      this.setState({result: resultString.slice(0,4) + resultString.slice(resultString.indexOf('e'), resultString.length)});
      this.state.result.push(resultString.slice(0,4) + resultString.slice(resultString.indexOf('e'), resultString.length));
    } else if (resultNumber > 99999999) {
      this.setState({result: `${resultString[0]}.${resultString[1]+resultString[2]}e${(resultString.length-1)}`});
      this.state.results.push(`${resultString[0]}.${resultString[1]+resultString[2]}e${(resultString.length-1)}`);
    } else if (resultNumber < .00000001 && resultNumber > 0) {
      for (let i = 0; i < resultString.length; i++) {
        if (resultString[i] !== '0' && resultString[i] !== '.') {
          this.setState({result: `${resultString[i]}.${(resultString[i+1] || '0') + (resultString[i+2] || '0')}e-${i}`});
          this.state.results.push(`${resultString[i]}.${(resultString[i+1] || '0') + (resultString[i+2] || '0')}e-${i}`);
        }
      }
    } else if (resultString.length > 10) {
      this.setState({result: resultString.slice(0,8)});
      this.state.results.push(resultString.slice(0,8))
    } else {
      this.setState({result: resultString});
      this.state.results.push(resultString)
    }
  }

  handleClearResults() {
    this.setState({result: '', results: []});
  }

  setTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let morningOrNight = 'AM';

    if (hour > 11) morningOrNight = 'PM';
    if (hour === 0) hour = 12;
    if (hour > 12) hour -= 12;
    if (minute < 10 && minute > 0) minute = '0' + minute;

    this.setState({time: `${hour}:${minute} ${morningOrNight}`});
  }

  componentWillMount() {
    this.setTime();
  }

  componentDidMount() {
    window.setInterval(function() {
      this.setTime();
    }.bind(this), 1000);
  }

  handleRecord() {
    return this.state.record.split(' ');
  }

  render() {
    return (
      <div className="col-md-6 sexy">

        <div>

          <div className="iphone-section-1">
            <div className="long-rectangle"></div>
            <div className="short-rectangle"></div>
          </div>




          <div className="iphone-section-2">
            <div className="view">
              <div className="view-header">
                <div className="signal">
                  <div className="signal-circles-container">
                    <div className="signal-circle-1"></div>
                    <div className="signal-circle-1"></div>
                    <div className="signal-circle-1"></div>
                    <div className="signal-circle-2"></div>
                    <div className="signal-circle-2"></div>
                  </div>
                  <div className="wifi">
                  </div>
                </div>
                <div className="time">
                  {this.state.time}
                </div>
                <div className="battery">
                  <div className="battery-percent">42%</div>
                  <div className="bluetooth-icon"></div>
                  <div className="battery-icon"></div>
                </div>
              </div>
              <div className="result">
                {this.state.result}
              </div>

              <div className="view-footer">
                <div className="x">
                  <div onClick={() => {this.handleClearResults()}}>
                    x
                  </div>
                </div>
                <div className="previous-record">
                  {this.state.results[this.state.results.length-2] || ''}
                </div>
              </div>






            </div>

            <div className="history">
              <span id="history-text">{this.handleRecord().map((current, index) => {
                if (index === 0 || index % 2 === 0) {
                  return <span id="num" key={index}>{`${current} `}</span>
                } else {
                  return <span id="operator" key={index}>{`${current} `}</span>
                }
              })}</span>
            </div>

            <div className='button-group'>

              <div>
                <div onClick={() => {this.handleClear() }}>
                  <div>
                    C
                  </div>
                </div>
                <div onClick={() => {this.handleClick('-') }} className="operator">+/-</div>
                <div className="operator">%</div>
                <div onClick={() => {this.handleClick(' / ') }} className="operator">/</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('7') }}>7</div>
                <div onClick={() => {this.handleClick('8') }}>8</div>
                <div onClick={() => {this.handleClick('9') }}>9</div>
                <div onClick={() => {this.handleClick(' * ') }} className="operator">x</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('4') }}>4</div>
                <div onClick={() => {this.handleClick('5') }}>5</div>
                <div onClick={() => {this.handleClick('6') }}>6</div>
                <div onClick={() => {this.handleClick(' - ') }} className="operator">–</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('1') }}>1</div>
                <div onClick={() => {this.handleClick('2') }}>2</div>
                <div onClick={() => {this.handleClick('3') }}>3</div>
                <div onClick={() => {this.handleClick(' + ') }} className="operator">+</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('.') }}>.</div>
                <div onClick={() => {this.handleClick('0') }}>0</div>
                <div className="sexy-button-equal" onClick={() => {this.handleEnter()}}>=</div>
              </div>

            </div>
          </div>




          <div className="iphone-section-3">
              <svg height="28" width="28">
                <circle cx="14" cy="14" r="12" fill="#dcdfe6" stroke="#a1a5b3" strokeWidth="2" />
              </svg>
          </div>

        </div>

      </div>
    )
  }
}