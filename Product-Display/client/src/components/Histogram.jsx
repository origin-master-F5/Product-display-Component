import React from 'react';
import $ from 'jquery';

class Histogram extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.getPosition = this.getPosition.bind(this);
    }

    getPosition(){
        this.props.expandReviews('display-specs');
    }
    
    componentDidMount() {
        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault()
          
            $('html, body').animate(
              {
                scrollTop: $($(this).attr('href')).offset().top,
              },
              90,
              'linear'
            )
          }) 
    }

    render() {
        if (this.props.reviews_breakdown.length > 0) {
            var reviews = this.props.reviews_breakdown;
            var total = this.props.reviews_count;
            var percentage = [];
            for (let i = 0; i < reviews.length; i++) {
              let num = Math.round((reviews[i]/total) * 100)
              percentage.push(num.toString());
            }
        }

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
                            <span className="display-histogram-progress-bar" style={{width: percentage[0] + "%"}}>
                            </span>
                        </span><span className="display-histogram-percent">{reviews[0]}</span>
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
                            <span className="display-histogram-progress-bar" style={{width: percentage[1] + "%"}}>
                            </span>
                        </span><span className="display-histogram-percent">{reviews[1]}</span>
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
                            <span className="display-histogram-progress-bar" style={{width: percentage[2] + "%"}}>
                            </span>
                        </span><span className="display-histogram-percent">{reviews[2]}</span>
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
                            <span className="display-histogram-progress-bar" style={{width: percentage[3] + "%"}}>
                            </span>
                        </span><span className="display-histogram-percent">{reviews[3]}</span>
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
                            <span className="display-histogram-progress-bar" style={{width: percentage[4] + "%"}}>
                            </span>
                        </span><span className="display-histogram-percent">{reviews[4]}</span>
                    </div>


                    <span className="display-histogram-read-reviews-link" onClick={this.getPosition}> 
                    <a href="#display-open-sesame">Read Reviews</a>
                    
                    </span>
                    
                </div>
            </span>
            <div className="display-histogram-arrow"></div>
        </div>
   
    )
}}


export default Histogram;