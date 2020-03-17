import React from 'react';


class Stars extends React.Component {
constructor(props) {
  super(props);
  this.state = {
  
  };

}


render() {
  return (
    <div>
       <div className="display-stars">
         <x-star-rating>
            <div className="star full"></div>
            <div className="star full"></div>
            <div className="star full"></div>
            <div className="star full"></div>
            <div className="star full"></div>  
         </x-star-rating>
         <h3 className="display-star-rate">4.9</h3>
         <h4 className="display-star-review">(20,317 Reviews) </h4>
         
       </div>
    </div>
  )
 }
}

export default Stars;