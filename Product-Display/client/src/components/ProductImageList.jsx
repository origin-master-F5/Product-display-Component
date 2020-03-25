import React from 'react';
import ProductModal from './ProductModal.jsx';
import VideoImageList from './VideoImageList.jsx';


class ProductImageList extends React.Component {
  constructor(props) {
    super(props);
    this.viewProductInModal = React.createRef();
    this.state = {
     productList: [],
     show: false,
     tab_selected: true,
     video_selected: false,
     selected_index: 0
    };
  this.renderList = this.renderList.bind(this);
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
 
  }

  showModal(i){
    this.setState({
      show: true,
      selected_index: i
    }, this.viewProductInModal.current.changeProduct(i))
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
           <li key={index} className="display-image-thumbnail" onClick={()=>this.showModal(index)}>
             <div  className={"display-thumbnail-container"}>
               <button className="display-image-button">
                   <img className="display-individual-images" src={item} onMouseEnter={this.props.changeP} id={item}/>
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
          
          <ProductModal show={this.state.show} 
          close={this.hideModal} 
          selected={this.state.tab_selected}
          video={this.state.video_selected}
          product={this.props.items}
          imgIndex={this.state.selected_index}
          ref={this.viewProductInModal}
          />
          
          <ul className="display-thumbnail-list">
            {firstFour.map((item, index) => (
            <li key={index} className="display-image-thumbnail" 
            onClick={()=>this.showModal(index)}>
              <div  className={"display-thumbnail-container"}>
                <button className="display-image-button">
                    <img className="display-individual-images" src={item} onMouseEnter={this.props.changeP} id={item}/>
                </button>
              </div>
            </li>))}
            <li key="4" className="display-image-thumbnail" onClick={()=>this.showModal(4)}>
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
            <VideoImageList />
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