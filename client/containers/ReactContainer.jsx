import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Switch, Route, withRouter } from 'react-router-dom';
=======
import { Switch, Route, withRouter, Link } from 'react-router-dom';
>>>>>>> 5c70ec95aa91b33f33272ff2bab27ae74b305872
// import from child components...
import MainContainer from './MainContainer.jsx';
import Diamond from '../components/Diamond.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuContainer from './MenuContainer.jsx';
import DisplayContainer from './DisplayContainer.jsx';
<<<<<<< HEAD
import Pages from '../components/Pages.jsx';
import Conveyor from '../components/Conveyor.jsx';
import Swipe from '../components/Swipe.jsx';
// import 'useState'
=======
import SlideView from '../components/SlideView/SlideView.jsx';
import styled from 'styled-components';
import Carousel from '../components/Carousel.jsx';
import SwipeableCarousel from '../components/SwipeableCarousel.jsx'
import { Item, AppContainer, ExtraInfo, Code } from "../components/SwipeableCarouselComponents.jsx";

import TodoApp from '../components/TodoApp.jsx'
>>>>>>> 5c70ec95aa91b33f33272ff2bab27ae74b305872




class ReactContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
        showDiamond: true,
        showView: true,
        EmailModalIsOpen: false
    }
    this.toggle= this.toggle.bind(this);  
    this.setModalIsOpen = this.setModalIsOpen.bind(this);
  }

  toggle(){
      this.setState((prevState) => {
        return {showDiamond: !prevState.showDiamond};
      });
      console.log('clicked!')
  }

  setModalIsOpen(){
    this.setState((prevState) => {
      return {EmailModalIsOpen: !prevState.EmailModalIsOpen}
    });
    console.log("Modal button clicked")
  }

  

  render() {
    return(
      
      <div>   

<Diamond toggle={this.toggle} state={this.state}/>
<Swipe toggle={this.toggle} setModalIsOpen={this.setModalIsOpen} state={this.state}/>

      </div> 
    )
  }

}


<<<<<<< HEAD
=======




//export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
>>>>>>> 5c70ec95aa91b33f33272ff2bab27ae74b305872
export default ReactContainer;