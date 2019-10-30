import React , { Component } from 'react';
import { render } from 'react-dom';
import HomeView from './HomeView.jsx';
import AboutView from './AboutView.jsx'
import FilmsView from './FilmsView.jsx';
import MenuItem from '../components/MenuItemComponent.jsx'
import DisplayContainer from '../containers/DisplayContainer.jsx';
import { Link , Redirect , withRouter } from 'react-router-dom';
// import { NONAME } from 'dns';




class Pages extends Component{
    constructor(props){
        super(props)
        this.state={
            0: 'home',
            1: 'about',
            2: 'films',
            3: 'tv',
            4: 'music',
            5: 'arvr',
            6: 'contact',
            currentPage: 0,
            page: 'home'
        }

        //
        this.startingX;
        // this.p1 = document.getElementById(this.state[this.state.currentPage]);
        // this.p2 = document.getElementById(this.state[this.state.currentPage++]);
        this.p1;
        this.p2;
        this.lastTouch;

        //BIND METHODS
        // this.rotateCarousel = this.rotateCarousel.bind(this)
        // this.clickPrev = this.clickPrev.bind(this);
        // this.clickNext = this.clickNext.bind(this);
        this.p1onTouchStart = this.p1onTouchStart.bind(this);
        this.p1onTouchMove = this.p1onTouchMove.bind(this);
        this.p1onTouchEnd = this.p1onTouchEnd.bind(this);

        this.p2onTouchStart = this.p2onTouchStart.bind(this);
        this.p2onTouchMove = this.p2onTouchMove.bind(this);
        this.p2onTouchEnd = this.p2onTouchEnd.bind(this);

    }

    componentDidMount(){
        this.p1 = document.getElementById('home');
        this.p2 = document.getElementById('about');
    }

    //P1 HANDLERS
    p1onTouchStart(event){
        this.startingX = event.touches[0].screenX;
        console.log('this.startingX', this.startingX)

    }

    p1onTouchMove(event){
        let touch = event.touches[0];
        let change = this.startingX - touch.screenX;
        this.lastTouch = touch;
        if(change < 0){
            return;
        }   
        this.p1.style.left = '-' + change + 'px';
        this.p2.style.display = 'block';
        this.p2.style.left = (screen.width - change) + 'px'
        // event.preventDefault();
    }

    p1onTouchEnd(event){
        //console.log('event', event)
        //console.log('event.changedTouches', event.changedTouches)
        let change = this.startingX - this.lastTouch.screenX;
        let threshold = screen.width / 3;
        if (change < threshold){
            this.p1.style.left = 0;
            this.p2.style.left = "100%";
            this.p2.style.display = 'none';

        }else{
            this.p1.style.transition = 'all .3s';
            this.p2.style.transition = 'all .3s';
            this.p1.style.left = '-100%';
            this.p2.style.left = '0';
            this.p2.style.display = 'block';
            //This means we've switched pages so make p2 the new p1
            //and assign p2 to the next page
        //     let currentPage = this.state.currentPage;
        //     let page = this.state.page;
        //     currentPage++
        //     this.setState({currentPage: currentPage, 
        //     page: this.state[currentPage]})
         }
    }

    //P2 HANDLERS
    p2onTouchStart(event){
        this.startingX = event.touches[0].screenX;
        this.p1.style.transition = '';
        this.p2.style.transition = '';
        this.p1.style.display = 'none';
    }

    p2onTouchMove(event){
        let touch = event.touches[0];
        let change = touch.screenX - this.startingX;
        if(change < 0){
            return;
        }   
        this.p1.style.display = 'block';
        this.p1.style.left = (change - screen.width) + 'px'
        this.p2.style.left = change + 'px';
        // event.preventDefault();
        // console.log('on touch move!!')
    }

    p2onTouchEnd(event){
        //console.log('event.changedTouches', event.changedTouches[0])
        let change = event.changedTouches[0].screenX - this.startingX;
        let half = screen.width / 4;
        if (change < half){
      
            this.p1.style.left = "-100%";
            this.p1.style.display = 'none';
            this.p2.style.left = 0;

        }else{
            this.p1.style.transition = 'all .3s';
            this.p2.style.transition = 'all .3s';
            this.p1.style.left = '0';
            this.p2.style.left = '100%';
            // p2.style.display = 'block';
        }
    }



    












    // rotateCarousel() {
    //   let angle = (this.state.selectedIndex / this.state.cellCount) * -360;
    //   this.setState({ carouselStyle: `translateZ(-288px) rotateY(${angle}deg)`})
    // }

    // clickPrev(){
    //     let newSelectedIndex = this.state.selectedIndex
    //     let newCarouselPosition = this.state.carouselPosition
    //    if (newCarouselPosition < 0){ newCarouselPosition = 6}
    //    newSelectedIndex--;
    //    newCarouselPosition--;
    //         this.setState({ 
    //             selectedIndex: newSelectedIndex,
    //             carouselPosition: newCarouselPosition}, ()=>{
    //             // console.log('carouselPosition', this.state[newCarouselPosition]);
    //             console.log('this.state', this.state);
    //             this.rotateCarousel();
    //             this.props.history.push(this.state[newCarouselPosition]);
           
    //         });
    //         console.log("clickPrev")
    // };


    // clickNext(){
    //     console.log('yooo');
    //    let newSelectedIndex = this.state.selectedIndex
    //    let newCarouselPosition = this.state.carouselPosition
    //    if (newCarouselPosition > 6){ newCarouselPosition = 0}
    //    newSelectedIndex++;
    //    newCarouselPosition++;
    //         this.setState({ 
    //             selectedIndex: newSelectedIndex,
    //             carouselPosition: newCarouselPosition}, ()=>{
    //             console.log('this.state', this.state);
    //             this.rotateCarousel();
    //             this.props.history.push(this.state[newCarouselPosition])
    //         });
    //         console.log("clickNext")
    // }



    render(){
        let pagesStyle = this.props.state.showDiamond? "hidden": "show";
        // let page = (this.state.page === this.state[this.state.currentPage])? "page1": "page2";
        // console.log('this.state[this.state.currentPage]',this.state[this.state.currentPage])

        return(
            <div className={pagesStyle}>
       
        
    <div className='page1' id='home'onTouchStart={this.p1onTouchStart} onTouchMove={this.p1onTouchMove} onTouchEnd={this.p1onTouchEnd}>Home</div>
    <div className= 'page2' id='about' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>About</div>
    {/* <div className={page} id='films' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>Films</div>
    <div className={page} id='tv' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>TV</div>
    <div className={page} id='music' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>Music</div>
    <div className={page} id='arvr' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>AR/VR</div>
    <div className={page} id='contact' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>Contact</div> */}

</div>
            
        );
    }

}

export default withRouter(Pages);





