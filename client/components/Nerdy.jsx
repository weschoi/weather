import React from 'react';

export default class Nerdy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      record: '',
      view: '',
      show: '',
      enter: 0,
      end: false,
      alignItems: 'flex-start'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleClick(num) {

    let record = this.state.record;
    let length = record.length;

    if (num === '1' || num === '2' || num === '3' || num === '4' || num === '5' || num === '6' || num === '7' || num === '8' || num === '9' || num === '0') {
      if (this.state.end) {
        this.setState({view: num, record: num});
      } else if (record[length-1] === '+' || record[length-1] === '-' || record[length-1] === '*' || record[length-1] === '/') {
        this.setState({show: 'number', view: num, record: this.state.record+num});
      } else {
        this.setState({show: 'number', view: this.state.view+num, record: this.state.record+num});
      }
    } else if (num === '/' || num === '*' || num === '-' || num === '+') {
      if (this.state.record.length > 2) {
        this.setState({end: false, show: 'result', result: eval(this.state.record), record: eval(this.state.record) + num, enter: 0})
      } else {
        this.setState({end: false, record: this.state.record+num, enter: 0})
      }
    } else {
      this.setState({record: this.state.record+num})
    }
  }

  handleClear() {
    this.setState({record: '', result: ''});
  }

  handleClickKnob() {
    if (this.state.alignItems === 'flex-start') {
      this.setState({alignItems: 'center'})
    } else if (this.state.alignItems === 'center') {
      this.setState({alignItems: 'flex-end'});
    } else {
      this.setState({alignItems: 'flex-start'});
    }
  }

  handleSquareRoot() {
    this.setState({record: Math.sqrt(eval(this.state.record)), result: Math.sqrt(eval(this.state.record))})
  }

  handleEnter() {

    let record = this.state.record;
    let length = record.length;


    if (!this.state.enter) {
      this.setState({end: true, show: 'result', result: eval(this.state.record), enter: 1})
    } else {
      this.setState({end: true, show: 'result', result: eval(this.state.result + this.state.record.slice(length-2, length))});
    }
  }


  render() {

    let view = (this.state.show === 'number') ? this.state.view : this.state.result;

    return (
      <div className="col-md-6 nerdy">
        <div className="nerdy-container">

          <div className="braun" style={{marginBottom: '13px'}}></div>

          <div className="view-outer">
            <div className="view-inner">{view}</div>
          </div>

          <div className="dots">
            <div className="dots-col-1">
              <svg height="14" width="14" style={{"marginBottom": "6px"}}>
                <circle cx="7" cy="7" r="7" fill="#76af87" />
              </svg>

              <svg height="8" width="8">
                <circle cx="4" cy="4" r="4" fill="#bab59f" />
              </svg>

            </div>
            <div className="dots-col-2">

              <svg height="14" width="14" style={{"marginBottom": "6px"}}>
                <circle cx="7" cy="7" r="7" fill="#fd6433" />
              </svg>

              <svg height="8" width="8">
                <circle cx="4" cy="4" r="3" stroke="#bab59f" strokeWidth="1" fill="#2c2725" />
              </svg>
            </div>

            <div className="dots-col-3"></div>
            <div className="dots-col-4"></div>
            <div className="dots-col-5"></div>
            <div className="dots-col-6">

              <div className="dot-series">
                <svg height="6" width="6">
                  <circle cx="3" cy="3" r="1" fill="#bab59f" />
                </svg>
                <svg height="6" width="6">
                  <circle cx="3" cy="3" r="1" fill="#bab59f" />
                </svg>
                <svg height="6" width="6">
                  <circle cx="3" cy="3" r="1" fill="#bab59f" />
                </svg>
              </div>

              <div className="switch-container" style={{alignItems: this.state.alignItems}} onClick={() => {this.handleClickKnob() }}>
                <div className="knob" onClick={() => {this.handleClickKnob() }}>
                </div>
              </div>

            </div>
          </div>

          <div className="n-button-group">

            <div>
              <div>M+</div>
              <div>M-</div>
              <div>MR</div>
              <div>MC</div>
              <div>+/-</div>
            </div>

            <div>
              <div onClick={() => {this.handleSquareRoot() }}>√</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('7') }}>7</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('8') }}>8</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('9') }}>9</div>
              <div onClick={() => {this.handleClick('/') }}>/</div>
            </div>

            <div>
              <div>%</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('4') }}>4</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('5') }}>5</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('6') }}>6</div>
              <div onClick={() => {this.handleClick('*') }}>x</div>
            </div>

            <div>
              <div>1/x</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('1') }}>1</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('2') }}>2</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('3') }}>3</div>
              <div onClick={() => {this.handleClick('-') }}>-</div>
            </div>

            <div>
              <div onClick={() => {this.handleClear() }}>CE</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('0') }}>0</div>
              <div>.</div>
              <div className="nerdy-button-3" onClick={() => {this.handleEnter() }}>=</div>
              <div onClick={() => {this.handleClick('+') }}>+</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}