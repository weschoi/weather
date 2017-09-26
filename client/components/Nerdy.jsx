import React from 'react';

class Nerdy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      record: '',
      view: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleClick(num) {
    if (typeof this.state.record[this.state.record.length-1] !== 'number' && typeof num === 'number') {
      this.setState({view: num});
    }

    this.setState({record: this.state.record + num});
  }

  handleClear() {
    this.setState({record: ''});
  }

  handleEnter() {
    this.setState({result: eval(this.state.record), view: ''});
  }


  render() {
    return (
      <div className="col-md-6 nerdy">
        <div className="nerdy-container">

          <div className="braun" style={{marginBottom: '13px'}}></div>

          <div className="view-outer">
            <div className="view-inner">{this.state.result || this.state.view}</div>
          </div>

          <div className="dots">
            <div className="dots-col-1">
              <svg height="14" width="14" style={{"marginBottom": "6px"}}>
                <circle cx="7" cy="7" r="7" fill="#f4e842" />
              </svg>

              <svg height="8" width="8">
                <circle cx="4" cy="4" r="4" fill="#f4e842" />
              </svg>

            </div>
            <div className="dots-col-2">

              <svg height="14" width="14" style={{"marginBottom": "6px"}}>
                <circle cx="7" cy="7" r="7" fill="#f4e842" />
              </svg>

              <svg height="8" width="8">
                <circle cx="4" cy="4" r="4" fill="#f4e842" />
              </svg>
            </div>

            <div className="dots-col-3"></div>

            <div className="dots-col-4"></div>

            <div className="dots-col-5"></div>

            <div className="dots-col-6">
              <svg width="14" height="30">
                <rect x="0" y="0" rx="7" ry="7" width="14" height="30" style={{"fill":"red"}} />
              </svg>
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
              <div>S</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('7') }}>7</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('8') }}>8</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('9') }}>9</div>
              <div>/</div>
            </div>

            <div>
              <div>%</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('4') }}>4</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('5') }}>5</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('6') }}>6</div>
              <div>x</div>
            </div>

            <div>
              <div>1/x</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('1') }}>1</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('2') }}>2</div>
              <div className="nerdy-button-2" onClick={() => {this.handleClick('3') }}>3</div>
              <div>-</div>
            </div>

            <div>
              <div>CE</div>
              <div className="nerdy-button-2">0</div>
              <div>.</div>
              <div className="nerdy-button-3">=</div>
              <div>+</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Nerdy