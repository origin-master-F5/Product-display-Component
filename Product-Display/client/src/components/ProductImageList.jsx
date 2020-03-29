import React from 'react';
import ProductModal from './ProductModal.jsx';
import VideoImageList from './VideoImageList.jsx';


class ProductImageList extends React.Component {
  constructor(props) {
    super(props);
    this.viewProductInModal = React.createRef();
    this.state = {
     show: false,
     tab_selected: true,
     video_selected: false,
     selected_index: 0,
     hovered_index: 0
    };
  this.renderList = this.renderList.bind(this);
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
  this.onHover = this.onHover.bind(this);
  this.showVideoModal = this.showVideoModal.bind(this);
  }

  showModal(i){
    this.setState({
      show: true,
      tab_selected: true,
      video_selected: false,
      selected_index: i
    }, this.viewProductInModal.current.changeProduct(i))
  }

  hideModal(){
    this.setState({
      show: false
    })
  }

  onHover(i){
    this.setState({
      hovered_index: i
    })
  }

  showVideoModal(){
    this.viewProductInModal.current.selectVideoTab();
    this.setState({
      show: true,
      tab_selected: false,
      video_selected: true
    }, ()=> this.viewProductInModal.current.updateViewer())
  }

  renderList() {
   if (this.props.entire_product.length > 0 ) {
     if (this.props.entire_product[0].images.length < 5) {
       const itemList = this.props.entire_product[0].images;
       return (
          <ul className="display-thumbnail-list">
           {itemList.map((item, index) => (
           <li key={index} className="display-image-thumbnail" onClick={()=>this.showModal(index)} >
             <div  className={"display-thumbnail-container"}>
               <button className="display-image-button" onMouseEnter={() => this.onHover(index)}>
                   <img className="display-individual-images" src={item} onMouseEnter={this.props.changeP} id={item}/>
               </button>
             </div>
            </li>
           ))}
         </ul> 
       )
     }
     else {
      const itemList = this.props.entire_product[0].images;
      const firstFour = itemList.slice(0, 4);
      const fifth = itemList.slice(4, 5);
      const length = itemList.length - 4;
     
      return (
        <div>
          
          <ProductModal show={this.state.show} 
          close={this.hideModal} 
          selected={this.state.tab_selected}
          video={this.state.video_selected}
          entire_product={this.props.entire_product}
          imgIndex={this.state.selected_index}
          ref={this.viewProductInModal}
          still_img_videos={this.props.still_img_videos}
          miniplayer_videos={this.props.miniplayer_videos}
          video_length={this.props.video_length}
          />
          
          <ul className="display-thumbnail-list">
            {firstFour.map((item, index) => (
            <li key={index} className="display-image-thumbnail" 
            onClick={()=>this.showModal(index)}>
              <div  className={"display-thumbnail-container"}>
                <button className="display-image-button" onMouseEnter={() => this.onHover(index)}>
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
            <VideoImageList click={this.showVideoModal} still_img_videos={this.props.still_img_videos}/>
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