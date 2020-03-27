import React from 'react';

const ProductView = (props) => {
 return (
     <div className="display-media-wrapper">
        <div className="display-media-img-wrapper" onClick={props.click}>
          <button className="display-main-img-product-view">
            <img className="display-primary-image" src={props.image}/>
          </button>
        </div>
     </div>
 )
}

export default ProductView;