import React from 'react';

class Histogram extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
    return (
        <div className="display-histogram-popover" >
            <span>
                <div className="display-histogram-rating-bars-v2">
                    <div className="display-histogram-rating-bar">
                        {/* add anchor here */}
                        <span className="display-histogram-sr-only"></span>
                        <span className="display-histogram-star-rating-value">
                            <span className="display-histogram-star">5</span>
                            <img className="display-histogram-yellow-star" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_star.png" height="20"/>
                        </span>
                        {/* set custom width */}
                        <span className="display-histogram-progress">
                            <span className="display-histogram-progress-bar" style={{width: "86%"}}>
                            </span>
                        </span><span className="display-histogram-percent">18,180</span>
                    </div>
                    <div className="display-histogram-rating-bar display-histogram-child">
                        {/* add anchor here */}
                        <span className="display-histogram-sr-only"></span>
                        <span className="display-histogram-star-rating-value">
                            <span className="display-histogram-star">4</span>
                            <img className="display-histogram-yellow-star" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_star.png" height="20"/>
                        </span>
                        {/* set custom width */}
                        <span className="display-histogram-progress" >
                            <span className="display-histogram-progress-bar" style={{width: "13%"}}>
                            </span>
                        </span><span className="display-histogram-percent">1,998</span>
                    </div>
                    <div className="display-histogram-rating-bar display-histogram-child">
                        {/* add anchor here */}
                        <span className="display-histogram-sr-only"></span>
                        <span className="display-histogram-star-rating-value">
                            <span className="display-histogram-star">3</span>
                            <img className="display-histogram-yellow-star" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_star.png" height="20"/>
                        </span>
                        {/* set custom width */}
                        <span className="display-histogram-progress">
                            <span className="display-histogram-progress-bar" style={{width: "5%"}}>
                            </span>
                        </span><span className="display-histogram-percent">190</span>
                    </div>
                    <div className="display-histogram-rating-bar display-histogram-child">
                        {/* add anchor here */}
                        <span className="display-histogram-sr-only"></span>
                        <span className="display-histogram-star-rating-value">
                            <span className="display-histogram-star">2</span>
                            <img className="display-histogram-yellow-star" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_star.png" height="20"/>
                        </span>
                        {/* set custom width */}
                        <span className="display-histogram-progress">
                            <span className="display-histogram-progress-bar" style={{width: "0%"}}>
                            </span>
                        </span><span className="display-histogram-percent">22</span>
                    </div>
                    <div className="display-histogram-rating-bar display-histogram-child">
                        {/* add anchor here */}
                        <span className="display-histogram-sr-only"></span>
                        <span className="display-histogram-star-rating-value">
                            <span className="display-histogram-star">1</span>
                            <img className="display-histogram-yellow-star" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_star.png" height="20"/>
                        </span>
                        {/* set custom width */}
                        <span className="display-histogram-progress">
                            <span className="display-histogram-progress-bar" style={{width: "0%"}}>
                            </span>
                        </span><span className="display-histogram-percent">25</span>
                    </div>
                    <span className="display-histogram-read-reviews-link">Read Reviews</span>
                </div>
            </span>
            <div className="display-histogram-arrow"></div>
        </div>
   
    )
}}


export default Histogram;