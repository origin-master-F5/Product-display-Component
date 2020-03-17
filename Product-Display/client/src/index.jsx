import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   product: []
  };

}

render() {
  return (
    <div>
      <div className="display-container">
        <div className="display-nav-row">
            <div className="display-nav">
                <ol className="display-list">
                <li>Best Buy</li>
                <li>Video Games</li>
                <li>Nintendo Switch</li>
                <li>Nintendo Switch Games</li>
                </ol>
            </div>
        </div>
        <div className="display-container-row">
          <div className="display-container-col-1">
              <div className='display-product-title'>
                <div className="display-sku-title">
                <h2 className="display-sku-h2">Mario Kart 8 Deluxe - Nintendo Switch</h2>
                </div>
                <div className="display-data-layout">
                    <span className="display-product-data">
                      <strong>Model:</strong>
                    </span>
                    <span className="display-product-data">HACPAABPA</span>
                    <span className="display-product-data">
                      <strong> Publisher:</strong></span>
                    <span className="display-product-data">Nintendo</span>
                    <span className="display-product-data">
                      <strong> SKU:</strong>
                    </span>
                    <span className="display-product-data">5723304</span>
                    <span className="display-product-data">
                      <strong> Release Date:</strong>
                    </span>
                    <span className="display-product-data">04/28/2017</span>
                    <div className="display-product-data-lastline">
                      <strong>ESRB Rating:</strong>
                      <span className="display-product-data-everyone"> E (Everyone)</span>
                    </div>
                </div>
              </div>
              <div className="display-user-generated-content">

              </div>
              
              {/* put component here */}

           </div>

           <div className="display-container-col-2">

          </div>
        </div>
      </div>
    </div>
  )
}

}

ReactDOM.render(<App />, document.getElementById('bestbuy'));