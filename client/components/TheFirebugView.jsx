import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MenuItem from '../components/MenuItemComponent.jsx';
import VideoModal from '../components/VideoModal.jsx'
import Modal from './Modal.jsx';
import EmailModal from './EmailForm.jsx'; 

import 'aframe';
// import {Entity, Scene} from 'aframe-react';

class TheFirebugView extends Component{
    constructor(props){
        super(props)
        this.state={
            showPopup: false
        }
        // this.togglePopup = this.togglePopup.bind(this);
    }
   

    // componentDidMount() {
    //     let scene = document.querySelector("a-scene")
    //     scene.addEventListener("loaded", this.onSceneLoad);
    
    //     AFRAME.registerComponent("play", {
    //       init: function() {
    //     console.log('this.el', this.el)
    //         this.el.play();
    //       },
    //       onClick: function(e) {
    //         console.error("onClick");
    //       }
    //     });
    //   }
    //   onSceneLoad = () => {};

    // componentDidMount(){
    //     document.addEventListener("DOMContentLoaded", function(event) {
    //         let scene = document.querySelector("#tnfh_vr_scene");
    //         // var vid = document.getElementById("video");
    //         let videosphere = document.querySelector("#videosphere");
    //         console.log('scene',scene)
    //         console.log('videosphere.components.material.play', videosphere.components.material.play)
    //         // videosphere.components.material.material.map.image.play();
    //         videosphere.components.material.play();

    
    //       })
    // }
    

    render(){
        let emailModal = [];
        console.log('emailModal', emailModal)
        console.log('this.props.state', this.props.state.EmailModalIsOpen)
        if(this.props.state.EmailModalIsOpen){
            console.log("YUP")
        emailModal.push(<EmailModal key="emailModal"></EmailModal>) 
        }

        // let videosphere = document.querySelector('#videosphere')
        // console.log('videosphere', videosphere)
        // videosphere.components.material.material.map.image.play();

     

      
            

        return(
            <div className="thefirebug-view">
                

                {/* // <a-scene className="thefirebug-view">

                // <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box> */}

     {/* <a-assets> */}
      
      {/* <video id="hallway" style="display:none" autoPlay crossOrigin="anonymous" playsInline webkit-playsinline="true">
        <source type="video/mp4" src="assets/tnfh_website waiting room clip.mp4" />
      </video> */}

      {/* <audio id="diamond" src="assets/diamond.mp3" preload="auto"></audio> */}

      {/* </a-assets> */}
      
      
{/*     
  
        <a-entity id="rig" position="0 1 0">
            <a-entity id='camera' camera look-controls>
              <a-entity id='pointer' cursor="rayOrigin: mouse" raycaster="objects: .collidable; showLine: false"
              line="color: green; opacity: 0.5"></a-entity>
            </a-entity>
          </a-entity>
          
          <a-entity id="rotator" 
          rotation="0 -180 0"
          animation__rotation="property: rotation; to: 0 0 0; dur: 10000; easing: easeInOutQuad">
          <a-videosphere id="videosphere" src="#hallway" rotation='0 90 0' autoplay
          animation__fadein="property: components.material.material.color; type: color; from: black; to: none; dur: 5000 easing: easeInOutQuad"
          animation__fadeout="property: components.material.material.color; type: color; to: black; dur: 10000 easing: easeInOutQuad; startEvents: fadeout">
          </a-videosphere>
          </a-entity> */}



 
  {/* </a-scene>  */}


  



                 <div className="thefirebug-title">
                          <h1>"The Firebug"</h1>
                          <p>(In Production)</p>
                      {/* <img className="thefirebug-image" src="../../thefirebug_specposter.jpg" alt="The Firebug Poster" width='50%' height='auto'></img> */}
                      </div>

                      <div className='image-swipeView'>
                      {/* POSTER IMAGES HERE */}
                      <img className="can-images" src="../../TNFH_poster_final_2.png" alt="The Firebug Poster"  height='auto' width= '100%'></img>
                      </div>

                

                  {/* /* /* <div className='image-swipeView'> */
                 /* POSTER IMAGES HERE */
                 /* <img className="can-images" src="../../thefirebug_specposter.jpg" alt="The Firebug Poster" width='auto' height='auto'></img> */
                 /* </div> */ }

                
                 <a-scene id="tnfh_vr_scene" embedded >
                <a-assets>
                
      <video id="hallway" autoPlay crossOrigin="anonymous" playsInline webkit-playsinline="true" src="../../tnfh_clip.mp4">
      </video> 

      </a-assets>


        <a-entity id="rig" position="0 1 0">
            <a-entity id='camera' camera look-controls>
              {/* <a-entity id='pointer' cursor="rayOrigin: mouse" raycaster="objects: .collidable; showLine: false"
              line="color: green; opacity: 0.5"></a-entity> */}
            </a-entity>
          </a-entity>


          <a-entity id="rotator" 
          rotation="0 -180 0"
          animation__rotation="property: rotation; to: 0 0 0; dur: 10000; easing: easeInOutQuad">
          <a-videosphere id="videosphere" src="#hallway" rotation='0 90 0' 
          animation__fadein="property: components.material.material.color; type: color; from: black; to: none; dur: 5000 easing: easeInOutQuad"
          animation__fadeout="property: components.material.material.color; type: color; to: black; dur: 10000 easing: easeInOutQuad; startEvents: fadeout">
          </a-videosphere>
          </a-entity>

             

                 </a-scene>


                    
                <div className="thefirebug-content">
                   

                     <div className="thefirebug-info">
                        <p>Genre: Slowburn Thriller for the #MeToo era</p>
                        <p>WATCH CHAPTER ONE: The Night From Hell
                        </p>
               <div>

               {emailModal}
               </div>
                    
                                               
                         <div className="thefirebug-links-box">
                            {/* <div onClick={this.togglePopup}>
                //             <h3 className="thefirebug-links">Watch Sizzle</h3>
                //             </div> */}

                        <h3 className="thefirebug-links" onClick={() => this.props.setModalIsOpen()}> WATCH CHAPTER ONE </h3> 
-

                         {/* <Link to="/contact" style={{ textDecoration: 'none' }}> */}
                             {/* <h3 className="thefirebug-links" onClick={() => window.location.href = "mailto:adrian@greendiamondprojects.com?subject=Request for 'The Firebug' castlist"}>Request Castlist</h3>  */}
                         {/* </Link> */}

                            {/* THE MODAL WILL POP UP HERE */}
                            {/* {this.state.showPopup ?  <VideoModal togglePopup={this.togglePopup}/> : null}   */}
    
                         {/* <Link to="/contact" style={{ textDecoration: 'none' }}> */}
                             {/* <h3 className="thefirebug-links" onClick={() => window.location.href = "mailto:adrian@greendiamondprojects.com?subject=Request for 'The Firebug' screenplay"}>Request Screenplay</h3>  */}
                         {/* </Link> */}
                        </div>
                     </div>
                 </div>

          </div>
        )
    };
        
}
export default withRouter(TheFirebugView);