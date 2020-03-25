import React from 'react';

class Suggestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
   //build out if time
   
    render() {
        return (
            <div className="display-suggestions-component">
                <div className="display-suggestions-carousel">
                    {/* <div className="display-suggestions-pager-carousel"> */}
                    <div className="display-suggestions-header-wrapper">
                        <h2 className="display-suggestions-title">People also bought
                        <span className="display-suggestions-text"> (15 items)</span></h2>
                    </div>
                    <div className="display-suggestions-pager-carousel-content">
                        <button className="display-suggestions-arrow-left" disabled>
                            <div className="display-suggestions-arrow-left-icon ion-ios-arrow-left"></div>
                        </button>
                        <div className="display-suggestions-child-items-wrapper"></div>
                    </div>
                  {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Suggestions;