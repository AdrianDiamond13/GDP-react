import React from 'react';

const VideoModal = props => (
    <div className="videomodal-bg">
        <div className="videomodal-popup" onClick={props.togglePopup}></div>

        {/* <iframe className="videomodal-popup-inner" width="800" height="500"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
        </iframe> */}


    <iframe title="vimeo-player" src="https://player.vimeo.com/video/447021432" width="auto" height="auto" 
    frameborder="0" allowfullscreen allowvr="yes"></iframe>
    
   

        {/* <iframe className="videomodal-popup-inner" width="800" height="500" 
        src="https://www.youtube.com/embed/EHaxzuSt204?autoplay=1" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe> */}
        
    </div>
);

export default VideoModal;