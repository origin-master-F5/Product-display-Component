import React from 'react';
import Suggestions from './Suggestions.jsx';

const CartModal = React.forwardRef((props, ref) => {
    var showCartModal = props.show ? "display-modal-cart display-cartmodal-block" : "display-modal-cart display-cartmodal-none";
    return (
        <div className={showCartModal}>
            <div className="display-cartmodal-container">
                <div className="display-cartmodal-row" >
                    <div className="display-cartmodal-grid">
                        <div>
                            <div className="display-cartmodal-topnav-container">
                                <div className="display-cartmodal-left-col">
                                    <div className="display-cartmodal-checkmark ion-checkmark-circled"> </div>
                                     <span className="display-cartmodal-successtext">
                                       Item added to cart
                                     </span>
                                </div>
                                <div className="display-cartmodal-right-col">
                                    <button className="display-cartmodal-close-modal-text" onClick={props.close}>
                                        Continue Shopping
                                    </button>
                                    <div className="display-cartmodal-cart-nav">
                                        <div className="display-cartmodal-cart-icon ion-android-cart">
                                        </div>
                                        <span className="display-cartmodal-cart-nav-text">Go to cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="display-cartmodal-wrapper"ref={ref}>
                          <Suggestions category={props.category}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default CartModal;