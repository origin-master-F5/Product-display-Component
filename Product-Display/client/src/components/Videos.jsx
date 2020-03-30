import React from 'react';
// take still_img-videos and list it out
// upon click, take index of above and find corresponding index in miniplayer_videos for the player

const Videos = props => {
    if (props.still_img_videos.length > 0) {
        var video_images = props.still_img_videos.slice();
        var length = video_images.length;
        var title = props.trailer_title;
        var time = props.video_length[0];
    }
    return (
        <div>
            <div className="display-productmodal-image-content-wrapper display-productmodal-image-content-wrapper-row" >
                <div className="display-productmodal-image-thumbnail-wrapper">
                   <div className="display-videos-scroll-container">
                   <div className="display-productmodal-scroll-area">
                   <div className="display-productmodal-content">
                       <ol className="display-videos-carousel-indicate" >
                           {props.still_img_videos.map((image, i) => (
                                <li className="display-videos-thumbnail-content" key={i}>
                                    <div className="display-videos-thumbnail-container-videos">
                                        <button className="display-videos-thumbnail-button">
                                            <span className="display-video-image-wrapper-selected">
                                            <img className="display-video-mini-stillimage"src={image} alt=""  style={{width: "100%", maxHeight: "56px"}}/>
                                            <img className="display-video-mini-play-icon" src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/a86a46a5031e6cb4fdb60211479eb72d.svg" alt="" draggable="false" width="30" height="30"></img>
                                            </span>
                                            <span className="display-video-label">{title} Trailer {length > 1 && i + 1}</span>
                                        </button>
                                    </div>
                                </li>
                           ))}
                       </ol>
                   </div>
                  </div>
                 </div>
              </div>

              <div className="display-video-primary-video-wrapper">
                  <div className="display-video-primary-media-wrapper">
                      <div className="display-video-primary-video">
                          <div className="display-videos-primary-video-container">
                              <div className="display-videos-video-loader">
                                  <div className="display-videos-horizontal-left-vertical-top">
                                      <div className="display-videos-video-content">
                                          <div className="display-videos-video-player-wrapper">

                                          <video playsInline="" controlsList="nodownload" className="display-video-player" title="Mario Kart 8 Deluxe Trailer" crossOrigin="anonymous" style={{height: "100%", width: "100%"}}><source src={props.miniplayer_videos}></source>

                                          </video>
                                          <div className="display-videos-hover-wrapper">
                                              <div className="display-videos-show-wrapper">
                                                  <div className="display-videos-controller-wrapper">
                                                      <div className="display-videos-play-pause-overlay">
                                                        <button className="display-videos-play-pause-overlay-button">
                                                        <img className="display-videos-play-icon"src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/a86a46a5031e6cb4fdb60211479eb72d.svg" alt="" draggable="false"/>
                                                        </button>
                                                      </div>
                                                      <div className="display-videos-controller-buttons-wrapper">
                                                          <div className="display-videos-media-row">
                                                              <div className="display-videos-slider-wrapper">
                                                                  <div className="display-videos-videotooltipcontainer">
                                                                      <div className="display-videos-slider">
                                                                          <div className="display-videos-slider-grabber">  
                                                                          </div>
                                                                          <div className="display-videos-progress-bar">
                                                                          </div>
                                                                          <div className="display-videos-slider-track">
                                                                          </div>
                                                                          <div className="display-videos-progress-bar-2"></div>
                                                                          {/* add hover bar here */}
                                                                          {/* <div className="display-videos-hover-bar"></div> */}
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div className="display-videos-media-row-2">
                                                              <div className="display-videos-left-widgets">
                                                                <span className="display-videos-videotooltipcontainer">
                                                                  <span className="display-videos-videoToolTip-vanished" ></span>
                                                                    <button className="display-videos-play-pause-button" type="button" aria-label="Play">
                                                                      <img className="display-videos-play-pause-icon" src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/98e84052e93962eb3d7db30a6a0e38f4.svg" alt="Play"/>
                                                                    </button>
                                                                </span>
                                                                <div className="display-video-volume-controller">
                                                                    <span className="display-videos-videotooltipcontainer">
                                                                        <button className="display-video-volume-button" type="button" aria-label="mute">
                                                                        <img className="display-videos-volume-icon" src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/4ef806ca74ba58aa44097cc838be9adc.svg" alt="Mute"/>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                                <div className="display-videos-video-timer-wrapper">
                                                                    <div className="display-videos-full-timer">
                                                                        <span className="display-videos-time-counter">00:00</span>            
                                                                        <span className="display-videos-time-divider" >/</span>
                                                                        <span className="display-videos-time-duration" >{time}</span>
                                                                    </div>
                                                                </div>
                                                              </div>
                                                              <div className="display-videos-right-widgets">
                                                                <div className="display-videos-controller-buttons" >
                                                                    <div className="display-videos-videotooltipcontainer">
                                                                        <button className="display-videos-pictureInPicture" type="button" aria-label="Picture In Picture">
                                                                        <img src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/4e985fefd2b293f3ef5064678816a263.svg" alt="Picture In Picture"/>
                                                                        </button>
                                                                    <button className="display-videos-fullscreen" type="button" aria-label="Full Screen" >
                                                                    <img src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/90121fb2fdb4b7fc11af4f021eb3f83b.svg" alt="Full Screen"/>
                                                                    </button>
                                                                    </div>
                                                                </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          </div> 
                                       </div>
                                  </div>
                              </div>
                          </div>
                          <span className="display-videos-videoDetail-align-left">{title} Trailer [{time}]</span>
                      </div>
                  </div>
              </div>
            </div>
            
        </div>
    )
}

export default Videos;
