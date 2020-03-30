import React from 'react';

const Sidebar = props => {
    return (
        <div className="display-sidebar-container">
          <button className="display-sidebar-button">
          {props.category === "Nintendo Switch" &&<img className="display-sidebar-placeholder-img" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/sidebar-placeholder-luigi.png"></img>}
          {props.category === "PlayStation 4" && <img className="display-sidebar-placeholder-img" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/sidebar-ps4.png" />}
          </button>
          <div className="display-sidebar-button-place">

          </div>
        </div>
    )
}

export default Sidebar;