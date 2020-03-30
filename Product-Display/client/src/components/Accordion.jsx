import React from 'react';
import Overview from './Overview.jsx';
import Specs from './Specs.jsx';
import Questions from './Questions.jsx';
import Manufacturer from './Manufacturer.jsx';


class Accordion extends React.Component {
  constructor(props) {
   super(props);
   this.state = {

   }
   this.openAccordion = this.openAccordion.bind(this);
   this.hasManufacturer = this.hasManufacturer.bind(this);
  }

  openAccordion(name){
    let overview = document.getElementById(`${name}`);
    if (overview.style.maxHeight) {
        overview.style.maxHeight = null;
    } else {
        overview.style.maxHeight = overview.scrollHeight + "px";
    }
  }

  hasManufacturer(){
    if (this.props.manu_img.length > 0 ) {

      return (
        <div>
           <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-manu')}>
                   <span className="display-accordion-trigger-label">From the Manufacturer</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
               </button>
               <div id="display-manu" className="display-accordion-content" style={{maxHeight:null}}>
                  <Manufacturer manu_img={this.props.manu_img} />
               </div>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="display-overview-accordion">
           <div className="display-overview-c-accordion">
       
               <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-overview')}>
                  {/* move display-test when proxy is setup */}
                   <span className="display-accordion-trigger-label">Overview</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
               </button>
               <div id="display-overview" className="display-accordion-content" style={{maxHeight:null}}>
                 <Overview description={this.props.description} features={this.props.features} included={this.props.included}/>
               </div>
              
          
                <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-specs')}>
                   <span className="display-accordion-trigger-label">Specification</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
                </button>
          
              <div id="display-specs" className="display-accordion-content" style={{maxHeight:null}}>
                <Specs keyspecs_title={this.props.keyspecs_title}
                keyspecs={this.props.keyspecs}
                general_title={this.props.general_title}
                general={this.props.general}
                game_details={this.props.game_details}
                game_titles={this.props.game_titles}
                requirements={this.props.requirements}
                requirements_title={this.props.requirements_title}
                other={this.props.other}
                other_title={this.props.other_title}/>
               
              </div>
              
              <button id="display-open-sesame" className="display-accordion-trigger" onClick={() => this.openAccordion('display-reviews')}>
                   <span className="display-accordion-trigger-label">Reviews</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
               </button>
               <div id="display-reviews" className="display-accordion-content" style={{maxHeight:null}}>
                <div id="reviews"></div>
               </div>

               <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-qanda')}>
                   <span className="display-accordion-trigger-label">{"Questions & Answers"}</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
                </button>
          
              <div id="display-qanda"className="display-accordion-content" style={{maxHeight:null}}>
                <Questions questions_img={this.props.questions_img}/>
              </div>
            
             {/* <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-manu')}>
                   <span className="display-accordion-trigger-label">From the Manufacturer</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
               </button>
               <div id="display-manu" className="display-accordion-content" style={{maxHeight:null}}>
                  <Manufacturer manu_img={this.props.manu_img} />
               </div> */}
              {this.hasManufacturer()}

          </div>
      </div>
    )
  }
}
export default Accordion;