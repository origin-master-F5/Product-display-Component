import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/Stars.jsx';
import ProductView from './components/ProductView.jsx';
import ProductImageList from './components/ProductImageList.jsx';
import Form from './components/Form.jsx';
import Axios from 'axios';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   product: [],
   item_view: ""
  };
  this.getProducts = this.getProducts.bind(this);
  this.changeProduct = this.changeProduct.bind(this);
}

//refactor to get items that match search criteria

getProducts(){
  Axios.get('/product')
  .then(results => {
   this.setState({
     product: results.data,
     item_view: results.data[0].images[0]
   }, () => console.log('product', this.state.item_view))
  })
}

changeProduct(e) {
  this.setState({
    item_view: e.target.id
  })
}

componentDidMount(){
  this.getProducts()
}

render() {
  return (
    <div>
      <div className="display-container">
        <div className="display-nav-row">
            <div className="display-nav">
                <ol className="display-list">
                <li className="display-category">Best Buy</li>
                <li className="display-category">Video Games</li>
                <li className="display-category">Nintendo Switch</li>
                <li className="display-category">Nintendo Switch Games</li>
                </ol>
            </div>
            <div className="display-nav-share">
                 Share   
            </div>
            <div className="display-nav-print">
                 Print
            </div>
        </div>
        <div className="display-container-row">
          <div className="display-container-col-1">
              <div className='display-product-title'>
                <div className="display-sku-title">
                <span className="display-sku-h2">Mario Kart 8 Deluxe - Nintendo Switch</span>
                </div>
                <div className="display-data-layout">
                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                        <strong>Model:</strong>
                        <span className="display-product-data"> HACPAABPA</span></span>
                    </div>
                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                        <strong>Publisher:</strong>
                        <span className="display-product-data"> Nintendo</span></span>
                    </div>
                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                        <strong>SKU:</strong>
                        <span className="display-product-data"> 5723304</span></span>
                    </div>
                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                        <strong>Release Date:</strong>
                        <span className="display-product-data"> 04/28/2017</span></span>
                    </div>
                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                        <strong>ESRB Rating:</strong>
                        <span className="display-product-data-everyone"> E (Everyone)</span>
                        </span>
                    </div>
                </div>
              </div>
                <Stars />
              <div className="display-divider"></div>
             
              <div className="display-media-gallery">
                <div className="display-product-primary-container">
                  <ProductView image={this.state.item_view}/>
                  {/* put component here */}
                </div>
                <ProductImageList items={this.state.product} changeP={this.changeProduct}/>
                <div className="display-media-links-container">
                 <span className="display-media-links-interactive-tour">Interactive Tour and documents ></span>
                </div>
               
              </div>

           </div>

           <div className="display-container-col-2">
           <Form price={this.state.product}/>
          </div>
        </div>
      </div>
    </div>
  )
}

}

ReactDOM.render(<App />, document.getElementById('bestbuy'));