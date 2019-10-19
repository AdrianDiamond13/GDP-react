import React, { Component } from 'react';

class GenerationsView extends Component{
   
    //Change the Display to accomodate film content before mounting TheNightFromHellView component
    componentDidMount(){
        this.props.changeDisplay()
    }
    //Change the Display back to normal once you've unmounted TheNightFromHellView component
    componentWillUnmount(){
        this.props.changeDisplay()
    }

    render(){
        return(
            <div className="generations-view">
                <h1>GENERATIONS</h1>
            </div>
        )
    };
        
}
export default GenerationsView;