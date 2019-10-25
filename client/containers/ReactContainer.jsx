import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
// import from child components...
import MainContainer from './MainContainer.jsx';
import Diamond from '../components/Diamond.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuContainer from './MenuContainer.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import SlideView from '../components/SlideView/SlideView.jsx';
import styled from 'styled-components';
import Carousel from '../components/Carousel.jsx';
import SwipeableCarousel from '../components/SwipeableCarousel.jsx'
import { Item, AppContainer, ExtraInfo, Code } from "../components/SwipeableCarouselComponents.jsx";

import TodoApp from '../components/TodoApp.jsx'




class ReactContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
        showDiamond: true
    }
    this.toggle= this.toggle.bind(this);  
  }

  toggle(){
      this.setState((prevState) => {
        return {showDiamond: !prevState.showDiamond};
      });
      console.log('clicked!')
      //console.log(this.state)
  }

  render() {
    return(
      
      
      
        <div>
          

{/* <Diamond toggle={this.toggle} state={this.state}/> */}
{/* <MainContainer toggle={this.toggle} state={this.state}/> */}

{/* <SwipeableCarousel title="Carousel">
        <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" />
    </SwipeableCarousel> */}
   
<TodoApp/>
   
    {/* <Carousel/> */}
    <DisplayContainer/>

    {/* <MainContainer/> */}

</div>   
      
    )
  }

}






//export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default ReactContainer;