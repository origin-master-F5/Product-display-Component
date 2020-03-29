import React from 'react';
import moment from 'moment';

const Pickup = (props) => {
    var month = moment().add( 2, 'days').format('ddd, MMM D');
    
    return (
        <div>
           <div className="display-pickup-topdivider">
               <div className="display-pickup-day-green">
                   Pick up tomorrow at Compton
               </div>
               <div className="display-pickup-stores">
                   Check all stores
               </div>
               <div className="display-pickup-text-important">
                   Important: <span className="display-pickup-text-important-paragraph" >
                   Due to recent events, this store will be closed to the public. All pickup orders will be fulfilled using Best Buy Curbside Pickup. <span className="display-pickup-stores">Best Buy Curbside Pickup</span>
                   </span>
               </div>
               <div className="display-pickup-text-important">
                   Shipping: <span className="display-pickup-text-important-paragraph" >FREE Shipping by {month} or see more options in checkout to <span className="display-pickup-stores">90001</span></span>
              </div>
           </div>
        </div>
    )
}

export default Pickup;