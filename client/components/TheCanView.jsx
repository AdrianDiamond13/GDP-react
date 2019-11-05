import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MenuItem from '../components/MenuItemComponent.jsx';
import VideoModal from '../components/VideoModal.jsx'
import Modal from './Modal.jsx';

class TheCanView extends Component{
    constructor(props){
        super(props)
    }
   

    render(){
        return(
            <div className="thefirebug-view">

                <div className="thefirebug-title">
                        <h1>"THE CAN"</h1>
                        <p>(In development)</p>
                    </div>

            <div className='image-swipeView'>
                    {/* POSTER IMAGES HERE */}
                    <img className="can-images" src="../../Cliff_animation.PNG" alt="Cliff" width='100%' height= 'auto'></img>
                    <img className="can-images" src="../../Mike_animation.PNG" alt="Mike" width='100%' height= 'auto'></img>
                    <img className="can-images" src="../../Riley_animation.jpg" alt="Riley" width='100%' height= 'auto'></img>

            </div>


                <div className="thefirebug-content">
                    
                   

                    <div className="thefirebug-info">
                        <p>Genre: Live Action Comedy-Drama Series</p>
                        <p>Logline: While struggling to realize his rockstar dream, a socially anxious young musician takes a job in a quirky coffeehouse called "The Can," home to an increasingly dysfunctional community of misfits and open mic performers.</p> 
                        <p>Comps: "Cheers," "Girls," "Entourage," "Crashing," "My So-Called Life"</p>
                        
                        <div className="thefirebug-links-box">
                            {/* <div onClick={this.togglePopup}>
                            <h3 className="thefirebug-links">Watch Sizzle</h3>
                            </div> */}

                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <h3 className="thefirebug-links">Request Series bible</h3> 
                        </Link>

                            {/* THE MODAL WILL POP UP HERE */}
                            {/* {this.state.showPopup ?  <VideoModal togglePopup={this.togglePopup}/> : null}   */}
    
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <h3 className="thefirebug-links">Request Pilot script</h3> 
                        </Link>


                       
                        </div>
                    </div>
                </div>

            </div>
        )
    };
        
}
export default withRouter(TheCanView);