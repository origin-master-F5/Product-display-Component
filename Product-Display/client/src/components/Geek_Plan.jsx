import React from 'react';

class Geek_Plan extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       changeWhite: false,
       toggleYes: false
      }
    this.changeBoxColorWhite = this.changeBoxColorWhite.bind(this);
    this.changeBoxColorGrey = this.changeBoxColorGrey.bind(this);
    this.toggleBox = this.toggleBox.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    changeBoxColorWhite() {
      this.setState({
        changeWhite: true
      })
    }

    changeBoxColorGrey() {
      this.setState({
         changeWhite: false
      })
    }

    toggleBox(){
    let answer = this.state.toggleYes ? false : true;
      this.setState({
         toggleYes: answer
      })
    }

    toggleCheckbox() {
     if (!this.state.toggleYes) {
        return (
         <div>
             <i className="display-geekplan-check ion-checkmark" ></i>
         </div>
        )
     }

    }

    render() {
        return (
            <div>
              <div className="display-geekplan-container">
                <div className="display-geekplan-box" onMouseOver={this.changeBoxColorWhite} onMouseLeave={this.changeBoxColorGrey} onClick=       {this.toggleBox}>
                     <div className="display-geekplan-image">
                      {this.toggleCheckbox()}
                        <img src={this.state.changeWhite ? "https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_greybox.png" : "https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_whitebox.png"} height="20" />  
                     </div>
                    <div className="display-geekplan-text">2-Year Geek Squad Product Replacement</div></div>
                    <div className="display-geekplan-subcontainer">
                     <div className="display-geekplan-text-price">$7.99</div>
                     <div className="display-geekplan-text-price-monthly">About $0.33/mo.</div>
                  </div>
            </div>
            <div className="display-geekplan-text-learnmore">Learn more</div>
        </div>
        )

    }

}


export default Geek_Plan;