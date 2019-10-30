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
            pages: {
            0: 'home',
            1: 'about',
            2: 'films',
            3: 'tv',
            4: 'music',
            5: 'arvr',
            6: 'contact'
            },
            currentIndex: 0,
            page: 'home'
        }

        //
        this.startingX;
        // this.p1 = document.getElementById(this.state.pages[this.state.currentIndex]);
        // this.p2 = document.getElementById(this.state[this.state.currentPage++]);
        this.p1;
        this.p2;
        this.lastTouch;

        //BIND METHODS
        // this.rotateCarousel = this.rotateCarousel.bind(this)
        // this.clickPrev = this.clickPrev.bind(this);
        // this.clickNext = this.clickNext.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);


    }

    componentDidMount(){
        this.current = document.getElementById('home');
        this.next = document.getElementById('about');
        this.prev = document.getElementById('contact')
    }

    // setCurrentPage(){

    // }
    



    //TOUCH START
    onTouchStart(event){
        this.startingX = event.touches[0].screenX;
        console.log('this.startingX', this.startingX)
    }





    //TOUCH MOVE
    onTouchMove(event){
        let touch = event.touches[0];
        let change = this.startingX - touch.screenX;
        console.log('touch.screenX', touch.screenX)
        this.lastTouch = touch;
        console.log(change)
        //Moving Right
        // if(change<0){
            // console.log("MOVING RIGHT BITCH")
            this.current.style.left = Math.abs(change) + 'px';
            this.prev.style.display = 'block';
            this.prev.style.left = '-' + (screen.width + change) + 'px'
        // }else if (change >0){
            // console.log("MOVING LEFT BITCH")
            this.current.style.left = '-' + change + 'px';
            this.next.style.display = 'block';
           this.next.style.left = (screen.width - change) + 'px'
        // }   
    }

    // if(change < 0){
        //     console.log("MOVING RIGHT BITCH")
        //     this.current.style.left = Math.abs(change) + 'px';
        //     this.prev.style.display = 'block';
            //this.prev.style.left = '-' + (screen.width + change) + 'px'



    //TOUCH END
    onTouchEnd(event){
        //console.log('event', event)
        //console.log('event.changedTouches', event.changedTouches)
        let change = this.startingX - this.lastTouch.screenX;
        let threshold = screen.width / 3;
        //moving left
        if(change > 0){
            //moved left a little
            if (Math.abs(change) < threshold){
                this.current.style.left = 0;
                this.next.style.left = "100%";
                this.next.style.display = 'none';
            //moved left all the way
            }else{
                this.current.style.transition = 'all .3s';
                this.next.style.transition = 'all .3s';
                this.current.style.left = '-100%';
                this.next.style.left = '0';
                this.next.style.display = 'block';
            }
        }else{
        //moving right
        if (Math.abs(change) < threshold){
            //moved right a little
            this.prev.style.left = "-100%";
            this.prev.style.display = 'none';
            this.current.style.left = 0;
        }else{
            //moved right all the way
            this.prev.style.transition = 'all .3s';
            this.current.style.transition = 'all .3s';
            this.prev.style.left = '0';
            this.current.style.left = '100%';
            this.prev.style.display = 'block';
        }

    }   
         
    }

   





    render(){
        let pagesStyle = this.props.state.showDiamond? "hidden": "show";
        // let page = (this.state.page === this.state[this.state.currentPage])? "page1": "page2";
        // console.log('this.state[this.state.currentPage]',this.state[this.state.currentPage])

        return(
            <div className={pagesStyle}>
       
        
    <div className='currentPage' id='home'onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>Home</div>
    <div className='nextPage' id='about' onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>About</div>
    {/* <div className={page} id='films' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>Films</div>
    <div className={page} id='tv' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>TV</div>
    <div className={page} id='music' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>Music</div>
    <div className={page} id='arvr' onTouchStart={this.p2onTouchStart} onTouchMove={this.p2onTouchMove} onTouchEnd={this.p2onTouchEnd}>AR/VR</div> */}
    <div className='prevPage' id='contact' onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>Contact</div>

</div>
            
        );
    }

}

export default withRouter(Pages);





