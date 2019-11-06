import React from 'react';

const MusicView = props => (

<div className="music-view-container">    

        {/* <iframe className="videomodal-popup-inner" width="800" height="500"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
        </iframe> */}

       
        <iframe width="95%" height="80%"
       src="https://www.youtube.com/embed/kd55rVz8rMs" 
       frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen>
        </iframe>
       

        {/* <div className="heaven-info">
        <h3>H E A V E N</h3>
        <p>An Acoustic Mystery</p>
        <p>Written & Directed by</p>
        <p>Adrian Diamond</p>
        </div> */}
    </div>


);

export default MusicView;