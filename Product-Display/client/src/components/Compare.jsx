import React from 'react';
import CompareFooter from './CompareFooter.jsx';


class Compare extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      changeWhite: false,
      ribbonWhite: true,
      showComparison: false
    };
    this.changeBoxColorWhite = this.changeBoxColorWhite.bind(this);
    this.changeBoxColorGrey = this.changeBoxColorGrey.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.showModal = this.showModal.bind(this);
    this.changeRibbon = this.changeRibbon.bind(this);
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

  handleToggle() {
    let answer = this.state.showComparison ? false : true;
    this.setState({
        showComparison: answer
    })
  }

  showModal() {
    if (this.state.showComparison) {
        return (
            <div className="display-compare-check">
               <i className="display-geekplan-check ion-checkmark" ></i>
            </div>
        )
    }
  }

  changeRibbon() {
      if (this.state.ribbonWhite) {
          this.setState({
              ribbonWhite: false
          })
      }
  }

 render() {
    return (
        <div>
          <div className="display-compare-box-container">

              <div className="display-compare-toggle-box" onMouseOver={this.changeBoxColorWhite} onMouseLeave={this.changeBoxColorGrey} onClick={this.handleToggle}> {this.showModal()}
                <img className="display-compare-box" src={this.state.changeWhite ? "https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_greybox.png" : "https://bb-clone.s3-us-west-1.amazonaws.com/general/geek_whitebox.png"} height="20" />
               </div>
               <div className="display-compare-box-text" onMouseOver={this.changeBoxColorWhite} onMouseLeave={this.changeBoxColorGrey} onClick={this.handleToggle}>Compare</div>
              
              
                <img className="display-compare-save-box" src={this.state.ribbonWhite ? "https://bb-clone.s3-us-west-1.amazonaws.com/general/compare_save_whiteribbon.png" : "https://bb-clone.s3-us-west-1.amazonaws.com/general/compare_save_blueribbon.png"} height="18" onClick={this.changeRibbon}/>
                <span className="display-compare-save-text" >Saved</span>
          </div>
           <div>
             <div className={this.state.showComparison ? "display-compare-footer" : "display-compare-footer-none"}>
               <CompareFooter image={this.props.image} title={this.props.title} toggle={this.handleToggle}/>
            </div>
           </div>
        </div>
    )
 }
}

export default Compare;