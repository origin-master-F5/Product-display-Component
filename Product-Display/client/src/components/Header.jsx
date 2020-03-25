import React from 'react';

const Header = (props) => {
    return (
        <div>
          <div className="display-nav">
                <ol className="display-list"> {
                  props.header.map((item, index) => (
                  <li className="display-category" key={index}>{item}</li>
                  ))
                }
                </ol>
            </div>
        </div>
    )
}

export default Header;