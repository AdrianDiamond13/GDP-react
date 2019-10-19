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
        this.togglePopup = this.togglePopup.bind(this);
    }
   
    //Change the Display to accomodate film content before mounting TheFirebugView component
    componentDidMount(){
        this.props.changeDisplay()
    }
    //Change the Display back to normal once you've unmounted TheFirebugView component
    componentWillUnmount(){
        this.props.changeDisplay()
    }

    togglePopup() {  
        this.setState({  
            showPopup: !this.state.showPopup  
        });  
    }  

    render(){
        return(
            <div className="thefirebug-view">

                <div className="thefirebug-poster">
                    {/* POSTER IMAGE HERE */}
                    <img src="../../assets/thefirebug_specposter.jpg" alt="The Firebug Poster" width="330" height="550"></img>
                </div>


                <div className="thefirebug-content">
                    
                    <div className="thefirebug-title">
                        <h1>THE FIREBUG</h1>
                    </div>

                    <div className="thefirebug-info">
                        <li>Starring: Letitia Wright</li>
                        <li>Genre: Thriller, Suspense</li>
                        <li>Audience: #MeToo</li>
                        <p>Logline: When a traumatized young woman discovers that her father, a charismatic police officer, 
                        is domestically abusing his new wife, it awakens her long-suppressed impulse to commit arson.</p>
                        
                        <div className="thefirebug-links-box">
                            <div onClick={this.togglePopup}>
                            <h3 className="thefirebug-links">Watch Sizzle</h3>
                            </div>

                            {/* THE MODAL WILL POP UP HERE */}
                            {this.state.showPopup ?  <VideoModal togglePopup={this.togglePopup}/> : null}  
    
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <h3 className="thefirebug-links">Request Screenplay</h3> 
                        </Link>


                       
                        </div>
                    </div>
                </div>

            </div>
        )
    };
        
}
export default withRouter(TheFirebugView);