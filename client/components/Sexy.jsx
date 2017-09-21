import React from 'react';

class Sexy extends React.Component {
  render() {
    return (
      <div className="col-md-6 sexy">
        <div className="sexy-container">
          <div className="view">
            4602
          </div>
          <div className="history">
            4576 <span id="">+</span> 24 <span id="">=</span> 4602
          </div>

          <div className='button-group'>

            <div className="button-row">
              <div className="sexy-button">C</div>
              <div className="sexy-button">+/-</div>
              <div className="sexy-button">%</div>
              <div className="sexy-button">/</div>
            </div>

            <div className="button-row">
              <div className="sexy-button">7</div>
              <div className="sexy-button">8</div>
              <div className="sexy-button">9</div>
              <div className="sexy-button">x</div>
            </div>

            <div className="button-row">
              <div className="sexy-button">4</div>
              <div className="sexy-button">5</div>
              <div className="sexy-button">6</div>
              <div className="sexy-button">-</div>
            </div>

            <div className="button-row">
              <div className="sexy-button">1</div>
              <div className="sexy-button">2</div>
              <div className="sexy-button">3</div>
              <div className="sexy-button">+</div>
            </div>

            <div className="button-row">
              <div className="sexy-button">1</div>
              <div className="sexy-button">0</div>
              <div className="sexy-button-equal">=</div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Sexy