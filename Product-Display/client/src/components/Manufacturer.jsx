import React from 'react';

const Manufacturer = props => {
    return (
        <div className="display-questions-container">
            <button className="display-questions-container-button">
              <img className="display-questions-placeholder" src={props.manu_img} ></img>
            </button>
        </div>
    )
}

export default Manufacturer;