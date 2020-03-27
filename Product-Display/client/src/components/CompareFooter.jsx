import React from 'react';

const CompareFooter = (props) => {
    return (
        <div className="display-comparefooter-container">
            <div className="display-comparefooter-subcontainer">
             <h2 className="display-comparefooter-leftHeader">Compare (1)</h2>
             <div className="display-comparefooter-comparisons">
               <button className="display-comparefooter-clear-button" onClick={props.toggle}>Clear all</button>
                <button type="button" className="display-comparefooter-button">
                     Compare
                </button>
             </div>
             <div className="display-comparefooter-tray">
                 <button className="display-comparefooter-arrow-left ion-chevron-left"></button>
                 <ul className="display-comparefooter-list" >
                     <li className="display-comparefooter-list-item1">
                         <div className="display-comparefooter-product-container">
                             <div className="display-comparefooter-compare-image-container">
                                 <img className="display-comparefooter-image-container-img" src={props.image}></img>
                             </div>
                             <div className="display-comparefooter-compare-text-container">
                                <span className="display-comparefooter-compare-title">{props.title}</span>
                             </div>
                             <div className="display-comparefooter-compare-x">
                                 <button className="display-comparefooter-remove-button ion-close" onClick={props.toggle}></button>
                             </div>
                         </div>
                     </li>
                     <li className="display-comparefooter-list-empty"></li>
                     <li className="display-comparefooter-list-empty"></li>
                     <li className="display-comparefooter-list-empty"></li>
                 </ul>
                 <button className="display-comparefooter-arrow-left display-compare-arrow-space ion-chevron-right"></button>
             </div>
            </div>
        </div>
    )
}

export default CompareFooter;