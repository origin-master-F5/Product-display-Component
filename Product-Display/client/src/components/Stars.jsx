import React from 'react';


class Stars extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   expanded: false
  };

}


render() {
  return (
    <div>
       <div className="display-stars">
        <div className="display-ratings-reviews">
            <x-star-rating>
                <div className="star full"></div>
                <div className="star full"></div>
                <div className="star full"></div>
                <div className="star full"></div>
                <div className="star full"></div>  
            </x-star-rating>
            <div className="display-c-reviews">
                <span className="display-star-rate">4.9</span>
                <span className="display-star-review">(20,317 Reviews) </span>
            </div>
        </div>
        <div className="display-answered-questions">
          <div className="display-chevron-star-icons">
            {this.state.expanded === true ? 
            <i className="up-icon ion-chevron-up"></i> :
            <i className="down-icon ion-chevron-down"></i>
            }  
          </div>
            <span className="display-questions"> 27 Answered Questions</span>
        </div>
       </div>
    </div>
  )
 }
}

export default Stars;