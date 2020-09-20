import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
// import from child components...
import MenuContainer from './MenuContainer.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import VideoModal from '../components/VideoModal.jsx';
import Diamond from '../components/Diamond.jsx';
import { Domain } from 'domain';
import { BrowserRouter as Router } from 'react-router-dom';


const mapStateToProps = store => ({
  // add pertinent state here
});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
    
    
  }

  render() {
    let mainContainerClass = this.props.state.showDiamond? "hidden":"maincontainer"
    //console.log('main container - this.props.state', this.props.state)
    console.log('mainContainerClass', mainContainerClass)
    return(
      <div>

{/* <Switch>
<Route exact path='/'
component={Diamond}/>
</Switch> */}
       
      {/* <div className="maincontainer"> */}
      <div className={mainContainerClass}>
      <Router>
<<<<<<< HEAD
          <MenuContainer toggle={this.props.toggle}/>
          <DisplayContainer/>
=======
          {/* <MenuContainer toggle={this.props.toggle}/> */}
          <DisplayContainer/>
        <Carousel/>
>>>>>>> 5c70ec95aa91b33f33272ff2bab27ae74b305872
      </Router>
      </div> 
    
  </div>
  
    )
  }

}





//export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default withRouter(MainContainer);
//export default MainContainer;