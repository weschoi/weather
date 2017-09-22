import React from 'react';

class Sexy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      record: '',
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
    this.setState({result: eval(this.state.record)})
  }
            // <span style={{"marginRight": "20px"}}>4576 <span id="">+</span> 24 <span id="">=</span> 4602</span>

  render() {
    return (
      <div className="col-md-6 sexy">

        <div>

          <div className="view">{this.state.result}</div>

          <div className="history">
            <span>{this.state.record}</span>
          </div>

          <div className='button-group'>

            <div>
              <div onClick={() => {this.handleClear() }}>C</div>
              <div>+/-</div>
              <div>%</div>
              <div onClick={() => {this.handleClick('/') }}>/</div>
            </div>

            <div>
              <div onClick={() => {this.handleClick('7') }}>7</div>
              <div onClick={() => {this.handleClick('8') }}>8</div>
              <div onClick={() => {this.handleClick('9') }}>9</div>
              <div onClick={() => {this.handleClick('x') }}>x</div>
            </div>

            <div>
              <div onClick={() => {this.handleClick('4') }}>4</div>
              <div onClick={() => {this.handleClick('5') }}>5</div>
              <div onClick={() => {this.handleClick('6') }}>6</div>
              <div onClick={() => {this.handleClick('-') }}>-</div>
            </div>

            <div>
              <div onClick={() => {this.handleClick('1') }}>1</div>
              <div onClick={() => {this.handleClick('2') }}>2</div>
              <div onClick={() => {this.handleClick('3') }}>3</div>
              <div onClick={() => {this.handleClick('+') }}>+</div>
            </div>

            <div>
              <div onClick={() => {this.handleClick('.') }}>.</div>
              <div onClick={() => {this.handleClick('0') }}>0</div>
              <div className="sexy-button-equal" onClick={() => {this.handleEnter()}}>=</div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Sexy