import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../components/MenuItemComponent.jsx'
import { BrowserRouter as Router } from 'react-router-dom';



class MenuContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            home: true,
            about: false,
            films: false,
            tv: false,
            music: false,
            arvr: false,
            contact: false
        }

        this.changeFont = this.changeFont.bind(this);
    }

    changeFont(e){
        e.persist()
        let newState = {}
        for(let prop in this.state){
            newState[prop] = false;
        }
        newState[e.target.id] = true;
        this.setState((state) => newState)
    }



    render(){
        console.log("state", this.state)
        return(
            
    <div className="menu">
    <div>
    <Link to="/" onClick={this.props.toggle}>
    <img className="diamond-icon" src="../../assets/green-diamond-icon.png" alt="GDP icon" width="100" height="100"></img>
    </Link>
    </div>
    <MenuItem component={Link} to={'/home'} name='HOME' id="home" state ={this.state} changeFont={this.changeFont}></MenuItem>
    <MenuItem component={Link} to={'/about'} name='ABOUT' id="about" state ={this.state} changeFont={this.changeFont}></MenuItem>
    <MenuItem component={Link} to={'/films'} name='FILMS' id="films" state ={this.state} changeFont={this.changeFont}></MenuItem>
    <MenuItem component={Link} to={'/tv'} name='TV' id="tv" state ={this.state} changeFont={this.changeFont}></MenuItem>
    <MenuItem component={Link} to={'/music'} name='MUSIC' id="music" state ={this.state} changeFont={this.changeFont}></MenuItem>
    <MenuItem component={Link} to={'/ar-vr'} name='AR/VR' id="arvr" state ={this.state} changeFont={this.changeFont}></MenuItem>
    <MenuItem component={Link} to={'/contact'} name='CONTACT' id="contact" state ={this.state} changeFont={this.changeFont}></MenuItem>
    </div>
        )
    }
}



export default MenuContainer;