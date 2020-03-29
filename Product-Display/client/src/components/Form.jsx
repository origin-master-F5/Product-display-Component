import React from 'react';
import Geek from './Geek.jsx';
import Geek_Plan from './Geek_Plan.jsx';
import Pickup from './Pickup.jsx';
import Cart from './Cart.jsx';
import Bundle from './Bundle.jsx';
import Compare from './Compare.jsx';
import Cardmember from './Cardmember.jsx';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.compatible_container = React.createRef();
      this.software_container = React.createRef();
      this.state = {
       show_compatible: false,
       show_software: false
      };
    this.showCompatibleSelection = this.showCompatibleSelection.bind(this);
    this.showDropDown = this.showDropDown.bind(this);
    this.handleClickOutsideCompatible = this.handleClickOutsideCompatible.bind(this);
    this.handleClickOutsideSoftware = this.handleClickOutsideSoftware.bind(this);
    this.showSoftwareSelection = this.showSoftwareSelection.bind(this);
    this.showDropDownSoftware = this.showDropDownSoftware.bind(this);
    }


    handleClickOutsideCompatible(e) {
      if (this.compatible_container.current && !this.compatible_container.current.contains(e.target)) {
          this.setState({
            show_compatible: false
          })
      }
    }

    handleClickOutsideSoftware(e) {
      if (this.software_container.current && !this.software_container.current.contains(e.target)) {
          this.setState({
            show_software: false
          })
      }
    }

    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutsideCompatible);
      document.addEventListener("mousedown", this.handleClickOutsideSoftware);
    }

    componentWillUnmount() {
      document.addEventListener('mousedown', this.handleClickOutsideCompatible);
      document.addEventListener('mousedown', this.handleClickOutsideSoftware);
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
                <div className="display-variation-dropdown display-dropdown-show" ref={this.compatible_container}>
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

   showSoftwareSelection() {
    if (this.state.show_software === false) {
        return (
        <div className="display-variation-dropdown" >
            <button className="display-rich-dropdown-trigger" >
                <span className="display-variation-dropdown-tile" >
                <span className="display-variation-image-wrapper" >
                    <span className="display-variation-software-option">Physical</span>
                </span>
                <i id="display-chevron-tile"className="up-icon ion-chevron-down" onClick={this.showDropDownSoftware}></i>
                </span>
            </button>
        </div>
        )
    } 
    return (
        <div className="display-software-dropdown" ref={this.software_container}>
            <div className="display-variation-dropdown display-dropdown-digital" >
               <button className="display-rich-dropdown-trigger display-dropdown-digital display-dropdown-software-button" >
                    <span className="display-variation-dropdown-tile display-dropdown-digital " >
                        <span className="display-variation-image-wrapper " >
                              <span className="display-variation-software-option">Digital</span>
                        </span>
                     </span>
                </button>
             </div>
             <div className="display-variation-dropdown display-dropdown-wii">
                <button className="display-rich-dropdown-trigger display-dropdown-software-button" >
                    <span className="display-variation-dropdown-tile display-dropdown-show" >
                    <span className="display-variation-image-wrapper" >
                    <span className="display-variation-software-option">Physical</span>
                    </span>
                    </span>
                </button>
            </div> 
        </div>
        )  
   }

    showDropDownSoftware() {
    this.setState({
      show_software: true,
      show_compatible: false
    })
   }

    showDropDown(){
      this.setState({
        show_compatible: true,
        show_software: false
      })
    }


    render(){
      return (
        <div className="display-container-col-2-wrapper">
          <div className="display-column-price-row">
           <div className="display-pricing-container">
              <div className="display-price-match">
                  <div className="display-dollar-icon">
                     <img className="display-dollar-image" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/price_icon.png" height="14" width="16"></img>
                     <span className="display-dollar-text">Price Match Guarantee
                        </span>
                  </div>
              </div>
              <div className="display-price-match-wrapper">
                <div className="display-price-match-amount" ><span className="display-price-match-dollar">$</span>
                    {this.props.entire_product.length > 0 ? this.props.entire_product[0].price : '' }  
               </div>
              </div>
              
           </div>
          </div>
            <div className="display-price-divider"></div>
    
              <div className="display-compatible-wrapper"> </div>
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
                <div className="display-format-platform-variation">
                    <div className="display-shop-product-column">
                        <div className="display-variation-header">
                            <span className="display-format-label" >
                                <label className="display-software-platform"> Software Format: </label>
                                {this.showSoftwareSelection()}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="display-format-platform-lowerDivider"></div>

             <Geek />             
             <Geek_Plan geek_squad_price={this.props.geek_squad_price}/>
            <Pickup />
            <Cart />
            <Bundle />
            <Compare image={this.props.image} item_name={this.props.item_name}/>
            <Cardmember />
        </div>
      )
    }

}

export default Form;