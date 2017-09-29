import React from 'react';

class Sexy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      record: '',
      time: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleClick(num) {
    this.setState({record: this.state.record + num});
  }

  handleClear() {
    this.setState({record: ''});
  }

  handleEnter() {
    let result = eval(this.state.record).toString();
    



    // console.log(Math.round(10 * eval(this.state.record))

    this.setState({result: eval(this.state.record)})
  }

  componentWillMount() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let morningOrNight = 'AM';

    if (hour > 11) morningOrNight = 'PM';
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }
    if (minute < 10 && minute > 0) minute = '0' + minute;

    this.setState({time: `${hour}:${minute} ${morningOrNight}`});
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
                  <div>
                    <div className="signal-circle-1"></div>
                    <div className="signal-circle-1"></div>
                    <div className="signal-circle-1"></div>
                    <div className="signal-circle-2"></div>
                    <div className="signal-circle-2"></div>
                  </div>
                </div>
                <div className="time">
                  {this.state.time}
                </div>
                <div className="battery">
                  <div className="battery-percent">42%</div>
                  <div className="battery-icon">
                  </div>
                </div>
              </div>
              <div className="result">
                {this.state.result}
              </div>
              <div className="view-footer">>
                <div className="x">
                  <div>
                    x
                  </div>
                </div>
                <div className="previous-record">
                  x
                </div>
              </div>

            </div>

            <div className="history">
              <span id="history-text">{this.state.record}</span>
            </div>

            <div className='button-group'>

              <div>
                <div onClick={() => {this.handleClear() }}>
                  <div>
                    C
                  </div>
                </div>
                <div className="operator">+/-</div>
                <div className="operator">%</div>
                <div onClick={() => {this.handleClick('/') }} className="operator">/</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('7') }}>7</div>
                <div onClick={() => {this.handleClick('8') }}>8</div>
                <div onClick={() => {this.handleClick('9') }}>9</div>
                <div onClick={() => {this.handleClick('*') }} className="operator">x</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('4') }}>4</div>
                <div onClick={() => {this.handleClick('5') }}>5</div>
                <div onClick={() => {this.handleClick('6') }}>6</div>
                <div onClick={() => {this.handleClick('-') }} className="operator">-</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('1') }}>1</div>
                <div onClick={() => {this.handleClick('2') }}>2</div>
                <div onClick={() => {this.handleClick('3') }}>3</div>
                <div onClick={() => {this.handleClick('+') }} className="operator">+</div>
              </div>

              <div>
                <div onClick={() => {this.handleClick('.') }}>.</div>
                <div onClick={() => {this.handleClick('0') }}>0</div>
                <div className="sexy-button-equal" onClick={() => {this.handleEnter()}}>=</div>
              </div>

            </div>
          </div>
          <div className="iphone-section-3">
          </div>

        </div>

      </div>
    )
  }
}

export default Sexy