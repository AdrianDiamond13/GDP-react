import React, { Component } from 'react';
import ReactContainer from './containers/ReactContainer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Diamond from './components/Diamond.jsx';
import MainContainer from './containers/MainContainer.jsx';
import { Switch, Route, withRouter } from 'react-router-dom';




class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (    
           <Router>
                <div>
                    <ReactContainer/>  
                </div>
            </Router>
        )
    }

}






export default App;