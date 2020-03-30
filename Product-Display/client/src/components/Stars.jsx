import React from 'react';
import Histogram from './Histogram.jsx';

export default class Stars extends React.Component {
constructor(props) {
  super(props);
  this.openHistogram = React.createRef();
  this.state = {
   expanded: false,
   show: false,
  };

this.handleClickOutside = this.handleClickOutside.bind(this);
this.showModal = this.showModal.bind(this);
this.hideModal = this.hideModal.bind(this);
this.calculateRating = this.calculateRating.bind(this);
}

hideModal() {
  this.setState({
  expanded: false,
   show: false
  })
}

showModal() {
  this.setState({
    expanded: true,
    show: true
  })
}

calculateRating() {
  var reviews = this.props.reviews_breakdown;
  var weightedNumerator = 0;
  var weightedDenominator = 0;
  var count = 5;
  for(let i = 0; i < reviews.length; i++) {
   weightedNumerator += (reviews.length - i) * reviews[i];
   weightedDenominator += reviews[i];
  }
  var rating = (weightedNumerator/weightedDenominator).toFixed(1);
  if (rating < 4.8) {
    var wholeStars = Math.trunc(rating);
    count -= wholeStars;
    var isQuarterStar = (rating - wholeStars) < .3 ? true : false;
    var isHalfStar = (rating - wholeStars) >= .5 ? true : false;
    var placeholder = [];
    for(let i = 0; i < wholeStars; i++) {
      placeholder.push(wholeStars);
    }
    return (
      <div className="display-ratings-reviews">
        {placeholder.map((n, i) => (
         <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
        ))} 
        {isQuarterStar ? <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_quarter_star.png" height="17"/> : <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_half_star.png" height="17"/>}
        {wholeStars < 3 && <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_empty_star.png" height="17"/>}
        {wholeStars < 3 && <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_empty_star.png" height="17"/>}
        {wholeStars === 3 && <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/review_empty_star.png" height="17"/>}
        <div className="display-c-reviews">
        <span className="display-star-rate">{rating}</span>
                <span className="display-star-review">({this.props.reviews_count} Reviews) </span>
            </div>
      </div>
    )
  } else {
    return (
      <div className="display-ratings-reviews">
        <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <div className="display-c-reviews">
               <span className="display-star-rate">{rating}</span>
                <span className="display-star-review">({this.props.reviews_count} Reviews) </span>
            </div>
      </div>
    )
  }
}

componentDidMount() {
  document.addEventListener("mousedown", this.handleClickOutside);
}

componentWillUnmount() {
  document.addEventListener("mousedown", this.handleClickOutside);
}

handleClickOutside(e) {
        if (this.openHistogram.current) {
          if (!this.openHistogram.current.contains(e.target)) {
            if (e.target.className !== "display-stars-down-icon ion-chevron-down" && e.target.className !== "display-stars-up-icon ion-chevron-up") {
              this.hideModal();
            }
          }
        }
  }

render() {
  return (
    <div>
       <div className="display-stars">
        <div className="display-ratings-reviews" onClick={this.calculateRating}>
            {this.calculateRating()}
       
        <span className="display-answered-questions">
          <div className="display-chevron-star-icons">
            {this.state.expanded === true ? 
            <i className="display-stars-up-icon ion-chevron-up" onClick={this.hideModal}></i> :
            <i className="display-stars-down-icon ion-chevron-down" onClick={this.showModal}></i>
            }  
          </div>
            <span className="display-questions"> {this.props.questions} Answered Questions</span>
        </span>

      </div>
    </div>
       <div className="display-histogram-divider"></div>
       <div className="display-histogram-window" ref={this.openHistogram}>
          {this.state.show && <Histogram reviews_breakdown={this.props.reviews_breakdown} reviews_count={this.props.reviews_count} expandReviews={this.props.expandReviews}/>}
       </div>
    </div>
  )
 }
}
  
