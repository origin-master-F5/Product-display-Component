import React from 'react';

const ProductHeader = props => {
    if (props.entire_product.length > 0) {
        var {name, model, publisher, product_sku, release_date, esrb_rating} = props.entire_product[0];
       
    }
    return (
      <div>
          <div className='display-product-title'>
                <div className="display-sku-title">
                    <span className="display-sku-h2">{name}</span>
                </div>
                <div className="display-data-layout">
                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                           <strong>Model:</strong>
                         <span className="display-product-data"> {model}</span></span>
                    </div>

                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                           <strong>Publisher:</strong>
                        <span className="display-product-data"> {publisher}</span></span>
                    </div>

                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                           <strong>SKU:</strong>
                        <span className="display-product-data"> {product_sku}</span></span>
                    </div>

                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                           <strong>Release Date:</strong>
                        <span className="display-product-data"> {release_date}</span></span>
                    </div>

                    <div className="display-model-product-data" >
                        <span className="display-product-data">
                           <strong>ESRB Rating:</strong>
                        <span className="display-product-data-everyone"> {esrb_rating}</span>
                        </span>
                    </div>
                </div>
              </div>
      </div>
    )
}

export default ProductHeader;