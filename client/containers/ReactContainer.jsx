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

<Diamond toggle={this.toggle} state={this.state}/>
{/* <MainContainer toggle={this.toggle} state={this.state}/> */}
<Pages state={this.state}/>


          {/* <Switch>
          <Route
          exact path='/'
          render={()=><Diamond toggle={this.toggle} state={this.state}/>}
          />
          <Route
        exact path='/main'
        render={()=><MainContainer toggle={this.toggle} state={this.state}/>}
          />
          </Switch> */}
         
          




       {/* <Switch>
                <Route
                    exact path='/'
                    component={Diamond}
                    />
                <Route
                    path='/main'
                    component={MainContainer}
                    //render={(props)=><div className="maincontainer"><MenuContainer/><DisplayContainer/></div>}
                    />
        </Switch> */}
      </div> 
    )
  }

}






//export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default ReactContainer;