import React , { Component } from 'react';
import { render } from 'react-dom';
import HomeView from './HomeView.jsx';
import AboutView from './AboutView.jsx'
import FilmsView from './FilmsView.jsx';
import MenuItem from '../components/MenuItemComponent.jsx'
import DisplayContainer from '../containers/DisplayContainer.jsx';
import { Link , Redirect , withRouter } from 'react-router-dom';
import TheFirebugView from './TheFirebugView.jsx';
import MusicView from './MusicView.jsx';
import ContactView from './ContactView.jsx';
import TheCanView from './TheCanView.jsx';
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
            page: 'home', 
            showFilmsView: true
        }

        //
        this.startingX;
        // this.p1 = document.getElementById(this.state.pages[this.state.currentIndex]);
        // this.p2 = document.getElementById(this.state[this.state.currentPage++]);
        this.conveyor;

        //BIND METHODS
      this.hideFilmView = this.hideFilmView.bind(this)


    }

    hideFilmView(){
        console.log("clicked!!!")
        this.setState((prevState) => {
            return {showFilmsView: !prevState.showFilmsView} 
        }, ()=> console.log("this.state.showFilmsView", this.state.showFilmsView))
    }

   





    render(){
        let showSwipe = this.props.state.showDiamond? "hidden": "show";
        let showView =this.props.state.showFilmsView? "show":"hidden";
        // let page = (this.state.page === this.state[this.state.currentPage])? "page1": "page2";
        // console.log('this.state[this.state.currentPage]',this.state[this.state.currentPage])

        return(

            <div className='swipeView' id={showSwipe}>
       
        
    <section className='page' id='home'>
    <HomeView toggle={this.props.toggle}/>
    </section>
    
    <section className='page' id='about'>About

    <AboutView/>
    </section>
    
    <section className='page' id='films'>Film
    {/* <FilmsView className={showView} hideFilmView={this.hideFilmView}/> */}
    {/* <DisplayContainer/> */}
    <TheFirebugView/>
    </section>
    
    <section className='page' id='tv'>TV
    <TheCanView/>
    </section>
    
    <section className='page' id='music'>Directing
    <MusicView/>
    </section>
    
    {/* <section className='page' id='arvr'>AR/VR</section>  */}

    <section className='page' id='contact'>Contact
    <ContactView/>
    </section>

</div>
            
        );
    }

}

export default withRouter(Swipe);





