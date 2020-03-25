import React from 'react';

const Geek = (props) => {

    return (
     <div>
         <div className="display-geek-badge-container">
             <div className="display-geek-badge-image">
                 <img src="display-geek-badd-image-img" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_badge.png" height="40"/>
             </div>
             <div className="display-geek-badge-header">
                <div className="display-geek-badge-header-text">
                    Protect your product
                </div>
                <div className="display-geek-ratings-container">
                    <div className="display-geek-header-stars">
                        <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="17"/>
                        <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="17"/>
                        <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="17"/>
                        <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="17"/>
                        <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="17"/>
                    </div>
                    <div className="display-geek-header-review-count">(378)</div>
                </div>
             </div>
         </div>
     </div>
    )
}

export default Geek;