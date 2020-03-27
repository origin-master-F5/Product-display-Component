import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/Stars.jsx';
import ProductView from './components/ProductView.jsx';
import ProductImageList from './components/ProductImageList.jsx';
import Form from './components/Form.jsx';
import CompareFooter from './components/CompareFooter.jsx';
import ProductHeader from './components/ProductHeader.jsx';
import Header from './components/Header.jsx';
import CompletePurchase from './components/CompletePurchase.jsx';
import Bought from './components/Bought.jsx';
import Axios from 'axios';
import Accordion from './components/Accordion.jsx';

class App extends React.Component {
constructor(props) {
  super(props);
  this.showProductModal = React.createRef();
  this.state = {
   product: [],
   item_view: "",
   showComparison: false,
   item_title: "", 
   header:[],
   compare_img: "", 
   price: ""
  };
  this.getProducts = this.getProducts.bind(this);
  this.changeProduct = this.changeProduct.bind(this);
//   this.renderFooter = this.renderFooter.bind(this);
//   this.changefooterstate = this.changefooterstate.bind(this);
  this.handleClickShowModal = this.handleClickShowModal.bind(this);
}

//refactor to get items that match search criteria

getProducts(){
  Axios.get('/product')
  .then(results => {
   this.setState({
     product: results.data,
     item_view: results.data[0].images[0],
     item_title: results.data[0].name,
     header: results.data[0].header_titles,
     compare_img: results.data[0].images[0],
     price: results.data[0].price
   }, () => console.log('product', this.state.price))
  })
}

changeProduct(e) {
  this.setState({
    item_view: e.target.id
  })
}

  handleClickShowModal(){
      let i = this.showProductModal.current.state.hovered_index;
      this.showProductModal.current.showModal(i);
  }

componentDidMount(){
  this.getProducts()
}

render() {
  return (
    <div>
      <div className="display-container">
        <div className="display-right-sidebar-container">test</div>
        <div className="display-nav-row">
            <Header header={this.state.header}/>
            <div className="display-nav-share">
                 Share   
            </div>
            <div className="display-nav-print">
                 Print
            </div>
        </div>
          <div className="display-container-col-1">
               <ProductHeader product={this.state.product}/>
               <Stars />
              <div className="display-divider"></div>
             
              <div className="display-media-gallery">
                <div className="display-product-primary-container">
                  <ProductView image={this.state.item_view} click={this.handleClickShowModal}/>
                  {/* put component here */}
                </div>
                <ProductImageList items={this.state.product} changeP={this.changeProduct} ref={this.showProductModal}/>
                <div className="display-media-links-container">
                 <span className="display-media-links-interactive-tour">Interactive Tour and documents ></span>
                </div>         
              </div>
           </div>

           <div className="display-container-col-2">
           <Form price={this.state.product} image={this.state.item_view} title={this.state.item_title}/>
          </div> 
         
        < CompletePurchase product={this.state.compare_img} price={this.state.price}/>
        <Bought />
        <Accordion />
      </div>
        
       
    </div>
  )
}

}

ReactDOM.render(<App />, document.getElementById('product'));