import React from 'react';

const VideoImageList = props => {
    // does videos exist? 
    return (
      <div>
        <div className="display-videoimagelist-video-thumbnail-first">
           <div className="display-videoimagelist-thumbnail-container">
              <img className="display-videoimagelist-play-icon" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/video_playicon.png" alt="" height="40"/>
           </div>
           
           <div className="display-videoimagelist-video-more-thumbnail">
              <div className="display-videoimagelist-thumbnail-container">
                  <div  className="display-videoimagelist-thumbnail-container-lastOne">
                    <button className="display-image-button">
                        <span className="display-text-wrapper">
                        <span className="display-more-text-wrapping">+ 3</span>
                        <span className="display-more-text-body">Videos</span>
                        </span>
                        <span className="display-image-overlay"></span>
                    </button>
                  </div>
              </div>
            </div>
          </div>
    </div>
    )
}

export default VideoImageList;