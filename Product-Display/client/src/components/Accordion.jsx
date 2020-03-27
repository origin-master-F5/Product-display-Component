import React from 'react';
import Overview from './Overview.jsx';
import Specs from './Specs.jsx';
import Questions from './Questions.jsx';


class Accordion extends React.Component {
  constructor(props) {
   super(props);
   this.state = {

   }
   this.openAccordion = this.openAccordion.bind(this);
  }

  openAccordion(name){
    let overview = document.getElementById(`${name}`);
    if (overview.style.maxHeight) {
        overview.style.maxHeight = null;
    } else {
        overview.style.maxHeight = overview.scrollHeight + "px";
    }
  }


  render() {
    return (
      <div className="display-overview-accordion">
           <div className="display-overview-c-accordion">

               <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-overview')}>
                   <span className="display-accordion-trigger-label">Overview</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
               </button>
               <div id="display-overview" className="display-accordion-content" style={{maxHeight:null}}>
                 <Overview />
               </div>
           
                <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-specs')}>
                   <span className="display-accordion-trigger-label">Specification</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
                </button>
          
              <div id="display-specs" className="display-accordion-content" style={{maxHeight:null}}>
                <Specs />
              </div>

              <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-reviews')}>
                   <span className="display-accordion-trigger-label">Reviews</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
               </button>
               <div id="display-reviews" className="display-accordion-content" style={{maxHeight:null}}>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil, consequuntur dignissimos architecto distinctio, vitae omnis eius impedit rerum placeat temporibus a quia accusantium optio voluptatum, quod facilis quisquam!
                </p>
               </div>

               <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-qanda')}>
                   <span className="display-accordion-trigger-label">{"Questions & Answers"}</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
                </button>
          
              <div id="display-qanda"className="display-accordion-content" style={{maxHeight:null}}>
                <Questions />
              </div>

              <button className="display-accordion-trigger" onClick={() => this.openAccordion('display-manu')}>
                   <span className="display-accordion-trigger-label">From the Manufacturer</span>
                   <span className="display-overview-accordion-trigger-caret ion-chevron-down"></span>
               </button>
               <div id="display-manu" className="display-accordion-content" style={{maxHeight:null}}>
                  <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil, consequuntur dignissimos architecto distinctio, vitae omnis eius impedit rerum placeat temporibus a quia accusantium optio voluptatum, quod facilis quisquam!
                  </p>
                  <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil, consequuntur dignissimos architecto distinctio, vitae omnis eius impedit rerum placeat temporibus a quia accusantium optio voluptatum, quod facilis quisquam!
                </p>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat nihil, consequuntur dignissimos architecto distinctio, vitae omnis eius impedit rerum placeat temporibus a quia accusantium optio voluptatum, quod facilis quisquam!
                </p>
               </div>

          </div>
      </div>
    )
  }
}
export default Accordion;