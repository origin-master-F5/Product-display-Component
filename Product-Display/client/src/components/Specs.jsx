import React from 'react';

const Specs = props => {
    var headers = ["ESRB Rating", "ESRB Descriptors", "Compatible Platform(s)", "Software Format"];
    return (
     <div className="display-specs-content">   
      <div className="display-specs-categories">
        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">Key Specs</span>
          </div>
          <div className="display-specs-table">
            <ul className="display-specs-ul">
              {headers.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
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
              {headers.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
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
              {headers.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div>

        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">Features</span>
          </div>
          <div className="display-specs-table">
            <div className="display-specs-ul">
                <span className="display-specs-not-li" >
                  <div className="display-specs-title-container">
                    <span>Language(s)</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
                </span>
            </div>
          </div>
        </div>
        <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div>

        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">{"Certifications & Listings"}</span>
          </div>
          <div className="display-specs-table">
            <ul className="display-specs-ul">
              {headers.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="display-specs-line-break-wrapper"><hr className="display-specs-presentation"/></div>

        <div className="display-specs-cateogry-wrapper">
          <div className="display-specs-section-title-container">
            <span className="display-specs-section-title">Compatibility</span>
          </div>
          <div className="display-specs-table">
            <ul className="display-specs-ul">
              {headers.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
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
              {headers.map((title, index) => (
                <li className="display-specs-li" key={index}>
                  <div className="display-specs-title-container">
                    <span>{title}</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
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
                    <span>Language(s)</span> 
                  </div>
                  <div className="display-specs-row-value">E (Everyone)</div>              
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
