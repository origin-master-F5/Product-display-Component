import React from 'react';

const VideoImageList = props => {
    if (props.still_img_videos.length > 0) {
      var numofVideos = props.still_img_videos.length;
    }
    return (
      <div onClick={props.click}>
        <div className="display-videoimagelist-video-thumbnail-first">
           <div className="display-videoimagelist-thumbnail-container" >
              <img className="display-videoimagelist-play-icon" src="https://bb-clone.s3-us-west-1.amazonaws.com/general/video_playicon.png" alt="" height="40"/>
           </div>
           
           <div className="display-videoimagelist-video-more-thumbnail">
           {numofVideos > 1 ? 
              <div className="display-videoimagelist-thumbnail-container">
                  <div  className="display-videoimagelist-thumbnail-container-lastOne">
                    <button className="display-image-button">
                        <span className="display-text-wrapper">
                          <span className="display-more-text-wrapping">+ {numofVideos > 1 ? numofVideos - 1 : 1}</span>
                        <span className="display-more-text-body">Videos</span>
                        </span>
                        <span className="display-image-overlay"></span>
                    </button>
              </div></div> : 
                    <div></div>}
            </div>
          </div>
    </div>
    ) 

}

export default VideoImageList;