import React from 'react';
import Videos from './Videos.jsx';

  class ProductModal extends React.Component {
      constructor(props){
      super(props);
      this.modal_window = React.createRef();
      this.state = {
       entire_products : this.props.entire_product,
       product_viewer: this.props.entire_product[0].images[0],
       zoom_selected: false,
       imgIndex: this.props.imgIndex,
       image_selected: true,
       video_selected: false,
      };
      this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
      this.toggleZoom = this.toggleZoom.bind(this);
      this.changeProduct = this.changeProduct.bind(this);
      this.selectOtherTab = this.selectOtherTab.bind(this);
      this.renderTabs = this.renderTabs.bind(this);
      this.selectVideoTab = this.selectVideoTab.bind(this);
      this.updateViewer = this.updateViewer.bind(this);
    }

    handleClickOutsideModal(e) {
        if (this.modal_window.current && !this.modal_window.current.contains(e.target)) {
        this.props.close();
        }
      }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutsideModal);
      }
    
      componentWillUnmount() {
        document.addEventListener("mousedown", this.handleClickOutsideModal);
      }

      toggleZoom() {
          let isZoomed = this.state.zoom_selected ? false : true;
          this.setState({
              zoom_selected: isZoomed
          })
      }

      changeProduct(i) {
       this.setState({
           product_viewer: this.props.entire_product[0].images[i],
           imgIndex: i,
           image_selected: true,
           video_selected: false,
       })
      }

      updateViewer() {
        this.setState({
          product_viewer: this.props.entire_product[0].images[0]
      })
     }

      selectVideoTab(){
        this.setState({
            image_selected: false,
            video_selected: true
          })
      }

      selectOtherTab() {
          let vid = this.state.video_selected ? false : true;
          let img = this.state.image_selected ? false : true;
          this.setState({
            image_selected: img,
            video_selected: vid
          })
      }

      renderTabs() {
          if (this.state.image_selected) {
              return (
                <div className="display-productmodal-image-content-wrapper display-productmodal-image-content-wrapper-row" >
                <div className="display-productmodal-image-thumbnail-wrapper">
                    <div className="display-productmodal-scroll-container">
                        <div className="display-productmodal-scroll-area">
                        <div className="display-productmodal-content">
                            <ol className="display-productmodal-carousel-indicate">
                              {this.props.entire_product[0].images.map((image, index) => (
                                <li className="display-productmodal-thumbnail-content" key={index} onClick={() => this.changeProduct(index)}>
                                   <div className={this.state.imgIndex === index ? "display-productmodal-thumbnail-container-selected" : "display-productmodal-thumbnail-container"} index={index}>
                                     <div className="display-productmodal-image-button">
                                         <img className="display-productmodal-images" src={image} index={index}>
                                         </img>
                                     </div>
                                   </div> 
                                </li>
                              ))}
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="display-productmodal-primary-image-wrapper">
                 <div className="display-productmodal-primary-media-wrapper">
                   <div className="display-productmodal-item-image-wrapper">
                   <div className="display-productmodal-primary-image-container">
                      <button className="display-productmodal-primary-button">
                       <img className={this.state.zoom_selected ? "display-productmodal-primary-image-zoomed" : "display-productmodal-primary-image-zoomable"} src={this.state.product_viewer} onClick={this.toggleZoom}></img>
                      <span className="display-productmodal-carousel-message" onClick={this.toggleZoom}>Click or tap to zoom</span>
                      </button>
                   </div>
                </div>
                </div>
                </div>
            </div>
              )
          }

          return (
              <Videos still_img_videos={this.props.still_img_videos} miniplayer_videos={this.props.miniplayer_videos} trailer_title={this.props.entire_product[0].name} video_length={this.props.video_length}/>
          )
      }
      
    render() {
        var showHideClassName = this.props.show ? "display-modal display-modal-block" : "display-modal display-modal-none";
      
    return (
     <div className={showHideClassName} >
        <div className="display-productmodal-modal-overlay">
         <div className="modal-main" ref={this.modal_window} >
           <div className="display-productmodal-modal-small-view">
             <div className="display-productmodal-content-container">
                <div className="display-productmodal-v-border-bottom">
                    <button className={this.state.image_selected ? "display-productmodal-tab-title-selected" : "display-productmodal-tab-title"} onClick={this.selectOtherTab}>Product Images</button>
                    <button className={this.state.video_selected ? 
                    "display-productmodal-tab-video-selected" : 
                    "display-productmodal-tab-video"} onClick={this.selectOtherTab}>Videos</button>
                </div>
                <div className="display-productmodal-tab-content-wrapper">
                    {this.renderTabs()}
                </div>
             </div>
           </div>
           <button className="display-productmodal-c-close-icon" onClick={() => this.props.close()}>
              <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/close_icon.png" height="15"></img>
           </button>
        </div>
      </div>
    </div>
    
)
}}


export default ProductModal;