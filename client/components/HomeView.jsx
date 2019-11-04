import React from 'react';
import { Link , Redirect , withRouter } from 'react-router-dom';


const HomeView = props => (
    <div className="home-view">
    <Link to="/" onClick={props.toggle}>
    <img className="diamond-icon" src="../../green-diamond-icon.png" alt="GDP icon" width="100" height="100"></img>
    </Link>
        <h1>GREEN DIAMOND PROJECTS</h1>
    </div>
);

export default HomeView;