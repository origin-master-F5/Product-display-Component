import React from 'react';
import Histogram from './Histogram.jsx';

export default class Stars extends React.Component {
constructor(props) {
  super(props);
  this.openHistogram = React.createRef();
  this.state = {
   expanded: false,
   show: false
  };

this.handleClickOutside = this.handleClickOutside.bind(this);
this.showModal = this.showModal.bind(this);
this.hideModal = this.hideModal.bind(this);
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
        <div className="display-ratings-reviews">
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <img src="https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_stars.png" height="19"/>
            <div className="display-c-reviews">
                <span className="display-star-rate">4.9</span>
                <span className="display-star-review">(20,317 Reviews) </span>
            </div>
       
        <span className="display-answered-questions">
          <div className="display-chevron-star-icons">
            {this.state.expanded === true ? 
            <i className="display-stars-up-icon ion-chevron-up" onClick={this.hideModal}></i> :
            <i className="display-stars-down-icon ion-chevron-down" onClick={this.showModal}></i>
            }  
          </div>
            <span className="display-questions"> 27 Answered Questions</span>
        </span>

      </div>
    </div>
       <div className="display-histogram-divider"></div>
       <div className="display-histogram-window" ref={this.openHistogram}>
          {this.state.show && <Histogram />}
       </div>
    </div>
  )
 }
}
  
