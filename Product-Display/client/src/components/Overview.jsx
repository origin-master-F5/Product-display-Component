import React from 'react';

const Overview = props => {

    return (
     <div>   
      <div className="display-overview-content-wrapper">
         <div className="display-overview-embedded-component-container">
           <div className="display-overview-shop-product-description">
             <section className="display-overview-align-heading-left">
                 <span className="display-overview-description-heading">Description</span>
                 <div className="display-overview-description-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore fugiat aliquam assumenda omnis cupiditate perspiciatis ea animi laboriosam odit? Explicabo distinctio at quae fugiat unde a labore ab rem?</div>
             </section>
           </div>
         </div>
      </div>
        <div className="display-overview-divider"></div>
        
        <div className="display-overview-shop-product-description-features">
            <section className="display-overview-align-heading-left">
                <span className="display-overview-description-heading">Features</span>
                <div className="display-overview-description-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore fugiat aliquam assumenda omnis cupiditate perspiciatis ea animi laboriosam odit? Explicabo distinctio at quae fugiat unde a labore ab rem?</div>
            </section>
        </div>
        <div className="display-overview-divider"></div>

        <div className="display-overview-shop-product-description-features">
            <section className="display-overview-align-heading-left">
                <span className="display-overview-description-heading">What's Included</span>
                <span className="display-overview-description-bold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore fugiat aliquam assumenda omnis cupiditate perspiciatis ea animi laboriosam odit? Explicabo distinctio at quae fugiat unde a labore ab rem?</span>
            </section>
        </div>

    </div>
    )
  
}
export default Overview;