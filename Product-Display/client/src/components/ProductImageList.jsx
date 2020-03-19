import React from 'react';
import ProductModal from './ProductModal.jsx';


class ProductImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     productList: [],
     show: false
    };
  this.renderList = this.renderList.bind(this);
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
  }

  showModal(){
    this.setState({
      show: true
    })
  }

  hideModal(){
    this.setState({
      show: false
    })
  }

  renderList() {
   if (this.props.items.length > 0 ) {
     if (this.props.items[0].images.length < 5) {
       const itemList = this.props.items[0].images;
       return (
          <ul className="display-thumbnail-list">
           {itemList.map((item, index) => (
           <li key={index} className="display-image-thumbnail">
             <div  className={"display-thumbnail-container"}>
               <button className="display-image-button">
                   <img className="display-individual-images" src={item}/>
               </button>
             </div>
            </li>
           ))}
         </ul> 
       )
     }
     else {
      const itemList = this.props.items[0].images;
      const firstFour = itemList.slice(0, 4);
      const fifth = itemList.slice(4, 5);
      const length = itemList.length - 4;
     
      return (
        <div>
          <ProductModal show={this.state.show} close={this.hideModal}/>
          <ul className="display-thumbnail-list">
            {firstFour.map((item, index) => (
            <li key={index} className="display-image-thumbnail" onClick={this.showModal}>
              <div  className={"display-thumbnail-container"}>
                <button className="display-image-button">
                    <img className="display-individual-images" src={item}/>
                </button>
              </div>
            </li>))}
            <li key="5" className="display-image-thumbnail">
            <div  className={"display-thumbnail-container-lastOne"}>
              <button className="display-image-button">
                <span className="display-text-wrapper">
                  <span className="display-more-text-wrapping">+ {length}</span>
                  <span className="display-more-text-body">images</span>
                </span>
                <span className="display-image-overlay"></span>
                  <img className="display-individual-images" src={fifth[0]}/>
              </button>
            </div>
            </li>
          </ul> 
        </div>
      )
    }
    
    
   }

   

  
    
    // slice so it's only 5.
    // on last item only, apply the overlay css
    

    
   
    
  }

  render() {
      
    return (
     <div>
       {this.renderList()}
     </div>
    )
  }
}

export default ProductImageList;