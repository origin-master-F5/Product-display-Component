import React from 'react';

const Videos = props => {
    return (
        <div>
            <div className="display-productmodal-image-content-wrapper display-productmodal-image-content-wrapper-row" >
                <div className="display-productmodal-image-thumbnail-wrapper">
                   <div className="display-videos-scroll-container">
                   <div className="display-productmodal-scroll-area">
                   <div className="display-productmodal-content">
                       <ol className="display-videos-carousel-indicate" >
                           <li className="display-videos-thumbnail-content">
                               <div className="display-videos-thumbnail-container-videos">
                                   <button className="display-videos-thumbnail-button">
                                       <span className="display-video-image-wrapper-selected">
                                       <img className="display-video-mini-stillimage"src="https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/20e8f7ed4abe4ce59da5126768578888.jpg;maxHeight=112;maxWidth=200" alt=""  style={{width: "100%", maxHeight: "56px"}}/>
                                       <img className="display-video-mini-play-icon" src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/a86a46a5031e6cb4fdb60211479eb72d.svg" alt="" draggable="false" width="30" height="30"></img>
                                       </span>
                                       <span className="display-video-label">Mario Kart 8 Deluxe Trailer</span>
                                   </button>
                               </div>
                           </li>
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

                                          <video playsInline="" controlsList="nodownload" className="display-video-player" title="Mario Kart 8 Deluxe Trailer" crossOrigin="anonymous" style={{height: "100%", width: "100%"}}><source src="https://sc.liveclicker.net/service/qr?1858858501&amp;mobile=true"></source>

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
                                                                    <button className="display-videos-play-pause-button">
                                                                      <img className="display-videos-play-pause-icon" src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/98e84052e93962eb3d7db30a6a0e38f4.svg" alt="Play"/>
                                                                    </button>
                                                                </span>
                                                                <div className="display-video-volume-controller">
                                                                    <span className="display-videos-videotooltipcontainer">
                                                                        <button className="display-video-volume-button">
                                                                        <img className="display-videos-volume-icon" src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/4ef806ca74ba58aa44097cc838be9adc.svg" alt="Mute"/>
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                                <div className="display-videos-video-timer-wrapper">
                                                                    <div className="display-videos-full-timer">
                                                                        <span className="display-videos-time-counter">00:00</span>            
                                                                        <span className="display-videos-time-divider" >/</span>
                                                                        <span className="display-videos-time-duration" >05:02</span>
                                                                    </div>
                                                                </div>
                                                              </div>
                                                              <div className="display-videos-right-widgets">

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
              </div>
            </div>
            
        </div>
    )
}

export default Videos;

{/* <img src="https://www.bestbuy.com/~assets/bby/_com//shop/media-gallery/dist/client/images/a86a46a5031e6cb4fdb60211479eb72d.svg" alt="" draggable="false"></img> */}