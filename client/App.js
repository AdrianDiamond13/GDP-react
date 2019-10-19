import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Router>
                <div>
                    <MainContainer/>  
                </div>
            </Router>
        )
    }

}





export default App;