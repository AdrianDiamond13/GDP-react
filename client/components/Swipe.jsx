import React , { Component } from 'react';
import { render } from 'react-dom';
import HomeView from './HomeView.jsx';
import AboutView from './AboutView.jsx'
import FilmsView from './FilmsView.jsx';
import MenuItem from '../components/MenuItemComponent.jsx'
import DisplayContainer from '../containers/DisplayContainer.jsx';
import { Link , Redirect , withRouter } from 'react-router-dom';
import TheFirebugView from './TheFirebugView.jsx';
// import { NONAME } from 'dns';




class Swipe extends Component{
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
        this.conveyor;

        //BIND METHODS
      


    }

   





    render(){
        let showSwipe = this.props.state.showDiamond? "hidden": "show";
        // let page = (this.state.page === this.state[this.state.currentPage])? "page1": "page2";
        // console.log('this.state[this.state.currentPage]',this.state[this.state.currentPage])

        return(

            <div className='swipeView' id={showSwipe}>
       
        
    <section className='page' id='home'>Home
    <HomeView/>
    </section>
    <section className='page' id='about'>About
    <AboutView/>
    </section>
    <section className='page' id='films'>Films
    <FilmsView/>
    <DisplayContainer/>
    </section>
    <section className='page' id='tv'>TV</section>
    <section className='page' id='music'>Music</section>
    <section className='page' id='arvr'>AR/VR</section> 
    <section className='page' id='contact'>Contact</section>

</div>
            
        );
    }

}

export default withRouter(Swipe);





