import React from 'react';

const CompletePurchase = props => {
   if (props.bundle_total.length > 0) {
     var sumofArray = (acc, curr) => acc + curr;
     var reduced = props.bundle_total.reduce((sumofArray))
     var sum = Number(props.price) + reduced;
     sum = sum.toFixed(2);
   }
    return (
        <div className="display-container-row-3">
          <div className="display-shop-complete-your-purchase-bottom">
          <div className="display-shop-complete-your-purchase">
              <h2 className="display-completepurchase-heading">
                  Complete your purchase
              </h2>
              <div className="display-completepurchase-v-divide-top"></div>
              <div>
                <button className="display-completepurchase-button-container">
                    <div className="display-completepurchase-cyp-content">
                      <div className="display-completepurchase-cyp-driver-wrapper">
                        <div className="display-completepurchase-cyp-driver">
                          <p className="display-completepurchase-currently-viewing">Item you're currently viewing</p>
                          <div className="display-completepurchase-cyp-item-driver">
                             <div className="display-completepurchase-image-wrapper">
                               <img className="display-completepurchase-image" src={props.static_img} ></img>
                             </div> 
                          </div>
                          <div className="display-completepurchase-item-detail-block">
                            <div className="display-completepurchase-item-price">
                            <span className="display-price-match-dollar">$</span>
                            <span className="display-price-match-amount">{props.price}</span>
                            </div>
                            <div className="display-completepurchase-disclaimer">Offer disclaimer</div>
                          </div>
                        
                      </div>
                    
                      </div>
                      <div className="display-completepurchase-cyp-items" >
                          <img className="display-completepurchase-cyp-placeholder" src={props.bundle_img} />
                      </div>
                    </div>
                </button>

                <div className="display-completepurchase-cyp-total">
                <div className="display-completepurchase-cyp-subtotal">
                    <span className="display-subtotal-label">Subtotal: </span>
                    <span className="display-price-match-dollar display-completepurchase-cyp-subtotal-label">${sum}</span>
                </div>
                <div className="display-completepurchase-cyp-button-wrapper">
                    <button className="display-completepurchase-cyp-add-to-cart-button">
                        <i className="display-cart-image ion-android-cart" ></i>Add 4 Items to Cart
                    </button>
                </div>
                </div>
              </div>
          </div>
          </div>
    </div>
    )
}

export default CompletePurchase;