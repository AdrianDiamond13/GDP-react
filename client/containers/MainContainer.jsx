import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
import MenuContainer from './MenuContainer.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import VideoModal from '../components/VideoModal.jsx';


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
    return(
      <div className="maincontainer">
          <MenuContainer/>
          <DisplayContainer/>
        
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);