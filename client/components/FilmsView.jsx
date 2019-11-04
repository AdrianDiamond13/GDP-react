import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItemComponent.jsx';
import Modal from './Modal.jsx';
import { Switch, Route, withRouter } from 'react-router-dom';


class FilmsView extends Component {
    constructor(props){
        super(props)
        this.state ={
            features: false,
            shorts: false,
        }
    this.changeFont = this.changeFont.bind(this);
    this.showModal = this.showModal.bind(this);
    }

    changeFont(e){
        this.showModal(e);
        this.props.hideFilmView()
    }

    showModal(e){
        console.log("MODAL!")
        let newState={}
        for(let prop in this.state){
            newState[prop] = false;
        }
        newState[e.target.id] = true;
        console.log("newState", newState)
        this.setState((state) => newState)
    }

    render(){       
        return(
            <div className="film-views-container">
                
                <div className="films-view">
                <MenuItem component={Link} to={'/features'} name='FEATURE FILMS' id="features" state ={this.state} changeFont={this.changeFont}></MenuItem>
                {/* <MenuItem component={Link} to={'/shorts'} name='SHORT FILMS' id="shorts" state ={this.state} changeFont={this.changeFont}></MenuItem> */}
                </div>
                
                <div>
                <Modal state={this.state} changeFont={this.changeFont} hideFilmView={this.props.hideFilmView}/>
                </div>

            </div>
        )
    }
}

export default withRouter(FilmsView);