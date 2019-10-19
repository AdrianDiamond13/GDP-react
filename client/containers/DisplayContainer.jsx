import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeView from '../components/HomeView.jsx';
import AboutView from '../components/AboutView.jsx';
import FilmsView from '../components/FilmsView.jsx';
import Modal from '../components/Modal.jsx';
import TheFirebugView from '../components/TheFirebugView.jsx';
import GenerationsView from '../components/GenerationsView.jsx';
import TheNightFromHellView from '../components/TheNightFromHellView.jsx';
//import components for the routes


// const DisplayContainer = props => (
// <div className="display">  
// </div>
// );

class DisplayContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            showFilmContent: false
        }
        this.changeDisplay = this.changeDisplay.bind(this);
    }


    changeDisplay(){
        let newState ={};
        if(this.state.showFilmContent){
            newState.showFilmContent = false;
        }else{
            newState.showFilmContent = true;
        }
        this.setState((state) => newState)
    }


    render(){
        //if this.state.showFilmContent === true, then switch the display class to accomodate the film content view
        let displayClass = this.state.showFilmContent ? "display-film-content": "display"
        return (
        <div className={displayClass}>
            <Switch>
                <Route
                    exact path='/home'
                    component={HomeView}
                />
                <Route
                    exact path='/about'
                    component={AboutView}
                />

                {/* FILMS */}
                <Route
                    exact path='/films'
                    component={FilmsView}
                />
                <Route
                    exact path='/features'
                    component={FilmsView}
                />
                <Route
                    exact path='/shorts'
                    component={FilmsView}
                />
                {/* FILM CONTENT VIEWS */}
                <Route
                exact path='/thefirebug'
                render={(props) => <TheFirebugView changeDisplay={this.changeDisplay}/>}
                />
                <Route
                    exact path='/generations'
                    render={(props) => <GenerationsView changeDisplay={this.changeDisplay} />}
                />
                <Route
                    exact path='/thenightfromhell'
                    render={(props) => <TheNightFromHellView changeDisplay={this.changeDisplay} />}
                />


                <Route
                    exact path='/tv'
                    render={() => <h1>TV</h1>}
                />
                <Route
                    exact path='/music'
                    render={() => <h1>MUSIC</h1>}
                />
                <Route
                    exact path='/ar-vr'
                    render={() => <h1>AR/VR</h1>}
                />
                <Route
                    exact path='/contact'
                    render={() => <h1>Adrian@GDP.com</h1>}
                />
            </Switch>
        </div>
        )
    }
}

export default withRouter(DisplayContainer);