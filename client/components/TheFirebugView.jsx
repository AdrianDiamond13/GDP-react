import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MenuItem from '../components/MenuItemComponent.jsx';
import VideoModal from '../components/VideoModal.jsx'
import Modal from './Modal.jsx';

class TheFirebugView extends Component{
    constructor(props){
        super(props)
        this.state={
            showPopup: false
        }
        // this.togglePopup = this.togglePopup.bind(this);
    }
   
    //Change the Display to accomodate film content before mounting TheFirebugView component
    // componentDidMount(){
    //     this.props.changeDisplay()
    // }
    //Change the Display back to normal once you've unmounted TheFirebugView component
    // componentWillUnmount(){
    //     this.props.changeDisplay()
    // }

    // togglePopup() {  
    //     this.setState({  
    //         showPopup: !this.state.showPopup  
    //     });  
    // }  

    render(){
        return(
            <div className="thefirebug-view">
                {/* <div className="thefirebug-content"> */}

                <div className="thefirebug-title">
                        <h1>"The Firebug"</h1>
                        <p>(In development)</p>
                    </div>

                <div className="thefirebug-poster">
                    {/* POSTER IMAGE HERE */}
                    <img className="thefirebug-poster" src="../../thefirebug_specposter.jpg" alt="The Firebug Poster" height='100%' width='auto'></img>
                </div> 

                 {/* <div className='image-swipeView'> */}
                 {/* POSTER IMAGES HERE */}
                 {/* <img className="can-images" src="../../thefirebug_specposter.jpg" alt="The Firebug Poster" width='auto' height='auto'></img> */}
                 {/* </div> */}


                    
                   

                    <div className="thefirebug-info">
                        <p>Genre: Slowburn Thriller for the #MeToo era</p>
                        <p>Logline: When a young woman haunted by horrific memories of domestic violence discovers that her father - the charismatic Sheriff of a small desert town -
                        has been abusing his new wife, it awakens an old impulse to commit arson.</p>
                        <p> Comps: "Se7en" , "No Country For Old Men" , "Memento" , "Unsane"</p>
                        <p> Budget: $5 million</p>
                        
                        <div className="thefirebug-links-box">
                            {/* <div onClick={this.togglePopup}>
                            <h3 className="thefirebug-links">Watch Sizzle</h3>
                            </div> */}

                        {/* <Link to="/contact" style={{ textDecoration: 'none' }}> */}
                            <h3 className="thefirebug-links" onClick={() => window.location.href = "mailto:adrian@greendiamondprojects.com?subject=Request for 'The Firebug' castlist"}>Request Castlist</h3> 
                        {/* </Link> */}

                            {/* THE MODAL WILL POP UP HERE */}
                            {/* {this.state.showPopup ?  <VideoModal togglePopup={this.togglePopup}/> : null}   */}
    
                        {/* <Link to="/contact" style={{ textDecoration: 'none' }}> */}
                            <h3 className="thefirebug-links" onClick={() => window.location.href = "mailto:adrian@greendiamondprojects.com?subject=Request for 'The Firebug' screenplay"}>Request Screenplay</h3> 
                        {/* </Link> */}


                       
                        </div>
                    </div>
                </div>

            // </div>
        )
    };
        
}
export default withRouter(TheFirebugView);