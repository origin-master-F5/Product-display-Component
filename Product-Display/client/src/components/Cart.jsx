import React from 'react';

const Cart = (props) => {
    return (
        <div>
           <div className="display-pickup-topdivider">
           <div className="display-pickup-addToCart">
               <button type="button" className="display-cart-button"><i className="display-cart-image ion-android-cart" ></i>Add to Cart</button>
           </div>
           </div>
        </div>
    )
}

export default Cart;