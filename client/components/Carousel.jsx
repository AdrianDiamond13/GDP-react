import React , { Component } from 'react';
import { render } from 'react-dom';
import HomeView from './HomeView.jsx';
import AboutView from './AboutView.jsx'
import FilmsView from './FilmsView.jsx';
import MenuItem from '../components/MenuItemComponent.jsx'
import DisplayContainer from '../containers/DisplayContainer.jsx';
import { Link , Redirect , withRouter } from 'react-router-dom';




class Carousel extends Component{
    constructor(props){
        super(props)
        this.state={
            0: '/home',
            1: '/about',
            2: '/films',
            3: '/TV',
            4: '/music',
            5: '/arvr',
            6: '/contact',
            carouselPosition: 0,
            carouselStyle: 'translateZ(-288px)',
            cellCount: 7,
            selectedIndex: 0,
        }

        

        //BIND METHODS
        this.rotateCarousel = this.rotateCarousel.bind(this)
        this.clickPrev = this.clickPrev.bind(this);
        this.clickNext = this.clickNext.bind(this);
    }

    rotateCarousel() {
      let angle = (this.state.selectedIndex / this.state.cellCount) * -360;
      this.setState({ carouselStyle: `translateZ(-288px) rotateY(${angle}deg)`})
    }

    clickPrev(){
        let newSelectedIndex = this.state.selectedIndex
        let newCarouselPosition = this.state.carouselPosition
       if (newCarouselPosition < 0){ newCarouselPosition = 6}
       newSelectedIndex--;
       newCarouselPosition--;
            this.setState({ 
                selectedIndex: newSelectedIndex,
                carouselPosition: newCarouselPosition}, ()=>{
                this.rotateCarousel();
                console.log('carouselPosition', this.state[newCarouselPosition]);
                this.props.history.push(this.state[newCarouselPosition]);
                console.log('this.state', this.state);
           
            });
            console.log("clickPrev")
    };


    clickNext(){
       let newSelectedIndex = this.state.selectedIndex
       let newCarouselPosition = this.state.carouselPosition
       if (newCarouselPosition > 6){ newCarouselPosition = 0}
       newSelectedIndex++;
       newCarouselPosition++;
            this.setState({ 
                selectedIndex: newSelectedIndex,
                carouselPosition: newCarouselPosition}, ()=>{
                this.rotateCarousel();
                this.props.history.push(this.state[newCarouselPosition])
            });
            console.log("clickNext")
    }



    render(){

        return(
            <div>
        <p>
  <button className="previous-button" onClick={this.clickPrev}>Previous</button>
  <button className="next-button" onClick={this.clickNext}>Next</button>
        </p>

        <div>
                {/* <Link to="/" onClick={this.props.toggle}> */}
                <Link to="/">
                    <img className="diamond-icon" src="../../assets/green-diamond-icon.png" alt="GDP icon" width="100" height="100"></img>
                </Link>
            </div>   
            
 <div className="scene"> 
 <div className="carousel" style={{ transform: this.state.carouselStyle }}>
    <div className="carousel__cell">Home</div>
    <div className="carousel__cell">About</div>
    <div className="carousel__cell">Films</div>
    <div className="carousel__cell">TV</div>
    <div className="carousel__cell">Music</div>
    <div className="carousel__cell">AR/VR</div>
    <div className="carousel__cell">Contact</div>
  </div>
 </div>

{/* <DisplayContainer/> */}

</div>
            
        );
    }

}

export default withRouter(Carousel);





