import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/Stars.jsx';
import ProductView from './components/ProductView.jsx';
import ProductImageList from './components/ProductImageList.jsx';
import Form from './components/Form.jsx';
import ProductHeader from './components/ProductHeader.jsx';
import Header from './components/Header.jsx';
import CompletePurchase from './components/CompletePurchase.jsx';
import Bought from './components/Bought.jsx';
import Axios from 'axios';
import Accordion from './components/Accordion.jsx';
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
constructor(props) {
  super(props);
  this.openOneAccordion = React.createRef();
  this.showProductModal = React.createRef();
  this.state = {
   entire_product: [],
   main_image: "",
   showComparison: false,
   item_name: "", 
   nav_categories:[],
   static_img: "", 
   price: 0,
   bundle_img: "",
   bundle_total: [],
   geek_squad_price: 0,
   still_img_videos: [],
   miniplayer_videos: "",
   reviews_breakdown: [],
   reviews_count: 0,
   questions: 0,
   item_name_no_category: "",
   description: "",
   features: "",
   included: "",
   keyspecs_title: [],
   keyspecs:[],
   general_title: [],
   general: [],
   game_titles: [],
   game_details: [],
   requirements_title:[],
   requirements:[],
   other_title:"",
   other:"",
   manu_img: "",
   questions_img: "",
   video_length:[], 
   category:"",
   compatible_platforms:[]
  };
  this.getProducts = this.getProducts.bind(this);
  this.changeProduct = this.changeProduct.bind(this);
  this.handleClickShowModal = this.handleClickShowModal.bind(this);
  this.onHashChange = this.onHashChange.bind(this);
  this.expandReviews = this.expandReviews.bind(this);
  this.getNewItem = this.getNewItem.bind(this);
  this.getPerItemName = this.getPerItemName.bind(this);
}

getProducts(){
  Axios.get('/product')
  .then(results => {
   this.setState({
     entire_product: results.data,
     main_image: results.data[0].images[0],
     item_name: results.data[0].name + ' - ' + results.data[0].category,
     nav_categories: results.data[0].header_titles,
     static_img: results.data[0].images[0],
     price: results.data[0].price, 
     bundle_img: results.data[0].bundle,
     bundle_total: results.data[0].bundle_total,
     geek_squad_price: results.data[0].geek_squad_price,
     still_img_videos: results.data[0].still_img_videos,
     miniplayer_videos: results.data[0].miniplayer_videos,
     reviews_breakdown: results.data[0].reviews_breakdown,
     reviews_count: results.data[0].reviews_count,
     questions: results.data[0].questions,
     item_name_no_category: results.data[0].name,
     description: results.data[0].description,
     features: results.data[0].features,
     included: results.data[0].included,
     keyspecs_title: results.data[0].keyspecs_title,
     keyspecs: results.data[0].keyspecs,
     general_title: results.data[0].general_title,
     general: results.data[0].general,
     game_titles : results.data[0].game_Details_title,
     game_details: results.data[0].game_details,
     requirements_title:results.data[0].requirements_title,
     requirements:results.data[0].requirements,
     other: results.data[0].other,
     other_title: results.data[0].other_title,
     manu_img: results.data[0].manufacturer_img,
     questions_img: results.data[0].questions_img,
     video_length: results.data[0].video_length,
     category: results.data[0].category,
     compatible_platforms: results.data[0].compatible_platforms
   })
  })
  .catch( err => console.log('err fetching data port 3002', err))
}

onHashChange() {
  window.addEventListener('hashchange', () => {
    var sku = window.location.hash;
     sku = sku.substring(1);
     if (!isNaN(sku)) {
       this.getNewItem(sku);
     } else {
       this.getPerItemName(sku);
     }
  })
}

getPerItemName(sku) {
  let name = sku;
  Axios.get(`/product/name/${name}`)
  .then(results => {
    if (results.data === null) {
      alert("Product not found");
      return;
    }
    let newarray= [];
    newarray.push(results.data);
    console.log('nearray', newarray);
    this.setState({
      entire_product: newarray,
      main_image: results.data.images[0],
      item_name: results.data.name + ' - ' + results.data.category,
      nav_categories: results.data.header_titles,
      static_img: results.data.images[0],
      price: results.data.price, 
      bundle_img: results.data.bundle,
      bundle_total: results.data.bundle_total,
      geek_squad_price: results.data.geek_squad_price,
      still_img_videos: results.data.still_img_videos,
      miniplayer_videos: results.data.miniplayer_videos,
      reviews_breakdown: results.data.reviews_breakdown,
      reviews_count: results.data.reviews_count,
      questions: results.data.questions,
      item_name_no_category: results.data.name,
      description: results.data.description,
      features: results.data.features,
      included: results.data.included,
      keyspecs_title: results.data.keyspecs_title,
      keyspecs: results.data.keyspecs,
      general_title: results.data.general_title,
      general: results.data.general,
      game_titles : results.data.game_Details_title,
      game_details: results.data.game_details,
      requirements_title:results.data.requirements_title,
      requirements:results.data.requirements,
      other: results.data.other,
      other_title: results.data.other_title,
      manu_img: results.data.manufacturer_img,
      questions_img: results.data.questions_img,
      video_length: results.data.video_length, 
      category: results.data.category,
      compatible_platforms: results.data.compatible_platforms
    })
})
.catch(err => console.log(err))
}

getNewItem(sku) {
  Axios.get(`/product/sku/${sku}`)
      .then(results => {
        if (results.data === null) {
          alert("Product not found");
          return;
        }
        let newarray= [];
        newarray.push(results.data);
        console.log('nearray', newarray);
        this.setState({
          entire_product: newarray,
          main_image: results.data.images[0],
          item_name: results.data.name + ' - ' + results.data.category,
          nav_categories: results.data.header_titles,
          static_img: results.data.images[0],
          price: results.data.price, 
          bundle_img: results.data.bundle,
          bundle_total: results.data.bundle_total,
          geek_squad_price: results.data.geek_squad_price,
          still_img_videos: results.data.still_img_videos,
          miniplayer_videos: results.data.miniplayer_videos,
          reviews_breakdown: results.data.reviews_breakdown,
          reviews_count: results.data.reviews_count,
          questions: results.data.questions,
          item_name_no_category: results.data.name,
          description: results.data.description,
          features: results.data.features,
          included: results.data.included,
          keyspecs_title: results.data.keyspecs_title,
          keyspecs: results.data.keyspecs,
          general_title: results.data.general_title,
          general: results.data.general,
          game_titles : results.data.game_Details_title,
          game_details: results.data.game_details,
          requirements_title:results.data.requirements_title,
          requirements:results.data.requirements,
          other: results.data.other,
          other_title: results.data.other_title,
          manu_img: results.data.manufacturer_img,
          questions_img: results.data.questions_img,
          video_length: results.data.video_length,
          category: results.data.category,
          compatible_platforms: results.data.compatible_platforms
        })
    })
    .catch(err => console.log(err))
}

expandReviews(name){
  this.openOneAccordion.current.openAccordion(name)
}

changeProduct(e) {
  this.setState({
    main_image: e.target.id
  })
}

  handleClickShowModal(){
      let i = this.showProductModal.current.state.hovered_index;
      this.showProductModal.current.showModal(i);
  }

componentDidMount(){
  this.getProducts();
  this.onHashChange();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}

render() {
  return (
    <div>
      <div className="display-container">
        <div className="display-right-sidebar-container">
          <Sidebar category={this.state.category}/>
        </div>
        <div className="display-nav-row">
            <Header nav_categories={this.state.nav_categories}/>
            <div className="display-nav-share">
                 Share   
            </div>
            <div className="display-nav-print">
                 Print
            </div>
        </div>
          <div className="display-container-col-1">
               <ProductHeader entire_product={this.state.entire_product}/>
               <Stars reviews_count={this.state.reviews_count} reviews_breakdown={this.state.reviews_breakdown} questions={this.state.questions} expandReviews={this.expandReviews}/>
              <div className="display-divider"></div>
             
              <div className="display-media-gallery">
                <div className="display-product-primary-container">
                  <ProductView image={this.state.main_image} click={this.handleClickShowModal}/>
                  {/* put component here */}
                </div>
                <ProductImageList entire_product={this.state.entire_product} changeP={this.changeProduct} ref={this.showProductModal}
                still_img_videos={this.state.still_img_videos} miniplayer_videos={this.state.miniplayer_videos} video_length={this.state.video_length}/>
                <div className="display-media-links-container">
                 <span className="display-media-links-interactive-tour">Interactive Tour and documents ></span>
                </div>         
              </div>
           </div>

           <div className="display-container-col-2">
           <Form entire_product={this.state.entire_product} image={this.state.main_image} item_name={this.state.item_name_no_category} geek_squad_price={this.state.geek_squad_price} compatible_platforms={this.state.compatible_platforms} category={this.state.category}/>
          </div> 
         
        < CompletePurchase static_img={this.state.static_img} price={this.state.price} bundle_img={this.state.bundle_img} bundle_total={this.state.bundle_total}/>
        <Bought category={this.state.category}/>
        <Accordion ref={this.openOneAccordion} 
        description={this.state.description} 
        features={this.state.features} 
        included={this.state.included}
        keyspecs_title={this.state.keyspecs_title}
        keyspecs={this.state.keyspecs}
        general={this.state.general}
        general_title={this.state.general_title}
        game_details={this.state.game_details}
        game_titles={this.state.game_titles}
        requirements={this.state.requirements}
        requirements_title={this.state.requirements_title}
        other={this.state.other}
        other_title={this.state.other_title}
        manu_img={this.state.manu_img}
        questions_img={this.state.questions_img}/>
      </div>
    </div>
  )
}

}

ReactDOM.render(<App />, document.getElementById('product'));