import React from 'react';

const Questions = props => {
    return (
        <div className="display-questions-container">
            <button className="display-questions-container-button">
              <img className="display-questions-placeholder" src={props.questions_img} ></img>
            </button>
        </div>
    )
}

export default Questions;