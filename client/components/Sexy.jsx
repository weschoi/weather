import React from 'react';

class Sexy extends React.Component {
  render() {
    return (
      <div className="col-md-6 sexy">

        <div>

          <div className="view">4602</div>

          <div className="history">
            <span style={{"marginRight": "20px"}}>4576 <span id="">+</span> 24 <span id="">=</span> 4602</span>
          </div>

          <div className='button-group'>

            <div>
              <div>C</div>
              <div>+/-</div>
              <div>%</div>
              <div>/</div>
            </div>

            <div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>x</div>
            </div>

            <div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>-</div>
            </div>

            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>+</div>
            </div>

            <div>
              <div>1</div>
              <div>0</div>
              <div className="sexy-button-equal">=</div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Sexy