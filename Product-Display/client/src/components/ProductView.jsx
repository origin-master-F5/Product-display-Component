import React from 'react';

const ProductView = (props) => {
 return (
     <div className="display-media-wrapper">
        <div className="display-media-img-wrapper" >
          <button className="display-main-img-product-view">
            <img className="display-primary-image" src={props.image} onClick={props.click}/>
          </button>
        </div>
     </div>
 )
}

export default ProductView;