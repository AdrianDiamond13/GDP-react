import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
// import from child components...
import MainContainer from './MainContainer.jsx';
import Diamond from '../components/Diamond.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuContainer from './MenuContainer.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import Pages from '../components/Pages.jsx';
import Conveyor from '../components/Conveyor.jsx';
import Swipe from '../components/Swipe.jsx';




class ReactContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
        showDiamond: true,
        showView: true
    }
    this.toggle= this.toggle.bind(this);  
  }

  toggle(){
      this.setState((prevState) => {
        return {showDiamond: !prevState.showDiamond};
      });
      console.log('clicked!')
  }

  render() {
    return(
      
      <div>   

<Diamond toggle={this.toggle} state={this.state}/>
<Swipe toggle={this.toggle} state={this.state}/>

      </div> 
    )
  }

}


export default ReactContainer;