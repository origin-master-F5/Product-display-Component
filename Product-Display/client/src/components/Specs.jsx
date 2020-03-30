import React from 'react';

const Specs = props => {
var headers = [ "a", "b", "c", "d"]
    if (props.keyspecs_title.length > 0) {
      var keyspec_titles = props.keyspecs_title.slice();
      var keyspec_details = props.keyspecs.slice();
  }

    return (
     <div className="display-specs-content">   
      <div className="display-specs-categories">
        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">Key Specs</span>
          </div>
          <div className="display-specs-table">

            <ul className="display-specs-ul">
              {keyspec_titles && keyspec_titles.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">{keyspec_details[index]}</div>              
                </li>
              ))}
            </ul>

          </div>
        </div>
        <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div>

        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">General</span>
          </div>
          <div className="display-specs-table">
            <ul className="display-specs-ul">
              {props.general_title.length > 0 && props.general_title.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">{props.general[index]}</div>              
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div>

        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">Game Details</span>
          </div>
          <div className="display-specs-table">
            <ul className="display-specs-ul">
              {props.game_titles.length > 0 && props.game_titles.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">{props.game_details[index]}</div>              
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div>


        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">Requirements</span>
          </div>
          <div className="display-specs-table">
            <ul className="display-specs-ul">
              {props.requirements_title.length > 0 && props.requirements_title.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">{props.requirements[index]}</div>              
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div>

        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">Other</span>
          </div>
          <div className="display-specs-table">
            <div className="display-specs-ul">
                <span className="display-specs-not-li" >
                  <div className="display-specs-title-container">
                    <span>{props.other_title}</span> 
                  </div>
                  <div className="display-specs-row-value">{props.other}</div>              
                </span>
            </div>
          </div>
        </div>
        {/* <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div> */}
      </div>
      <hr className="display-specs-last-row-divider"/>
     </div>
    )
}

export default Specs;
