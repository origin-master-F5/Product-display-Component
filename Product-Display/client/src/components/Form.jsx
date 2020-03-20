import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       show_compatible: false
      };
    this.showCompatibleSelection = this.showCompatibleSelection.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
    }

 
    showCompatibleSelection(){
        if (this.state.show_compatible === false) {
            return (
            <div className="display-variation-dropdown" >
                <button className="display-rich-dropdown-trigger" >
                    <span className="display-variation-dropdown-tile" >
                    <span className="display-variation-image-wrapper" >
                        <img className="display-variation-tile-image" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/tile_image_switch.png" /> 
                    </span>
                    <i id="display-chevron-tile"className="up-icon ion-chevron-down" onClick={this.showDropDown}></i>
                    </span>
                </button>
            </div>
            )
        } 
            return (
            <div>
                <div className="display-variation-dropdown display-dropdown-show">
                   <button className="display-rich-dropdown-trigger " >
                                <span className="display-variation-dropdown-tile display-dropdown-show" >
                                <span className="display-variation-image-wrapper" >
                                    <img className="display-variation-tile-image" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/tile_image_switch.png" /> 
                                </span>
                                </span>
                    </button>
                 </div>
                 <div className="display-variation-dropdown display-dropdown-wii">
                    <button className="display-rich-dropdown-trigger " >
                        <span className="display-variation-dropdown-tile display-dropdown-show" >
                        <span className="display-variation-image-wrapper" >
                            <img className="display-variation-tile-image" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/tile_image_wii.png" /> 
                        </span>
                        </span>
                    </button>
                </div> 
            </div>
            )
        
    }

    showDropDown(){
      this.setState({
        show_compatible: true
      })
    }


    render(){
      return (
        <div className="display-container-col-2-wrapper">
          <div className="display-column-price-row">
           <div className="display-pricing-container">
              <div className="display-price-match">
                  <div className="display-dollar-icon">
                     <img className="display-dollar-image" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/price_icon.png" height="14" width="15"></img>
                     <span className="display-dollar-text">Price Match Guarantee
                        </span>
                  </div>
              </div>
              <div className="display-price-match-wrapper">
                <div className="display-price-match-amount" ><span className="display-price-match-dollar">$</span>
                    {this.props.price.length > 0 ? this.props.price[0].price : '' }  
               </div>
              </div>
              
           </div>
          </div>
            <div className="display-price-divider"></div>
            <div className="display-compatible-wrapper">
              <div className="display-shop-product-variation">
                <div className="display-shop-product-column">
                 <div className="display-variation-header">
                    <span className="display-compatible-label" >
                        <label className="display-software-platform">
                            Compatible Platform(s)
                        </label>
                        {this.showCompatibleSelection()}
                    </span>
                 </div>
                </div>
              </div>
            </div>

        </div>
      )
    }

}

export default Form;