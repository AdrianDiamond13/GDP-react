import React from 'react';
import MenuItem from '../components/MenuItemComponent.jsx';
import { Link } from 'react-router-dom';
import { Switch, Route, withRouter } from 'react-router-dom';

const Modal = (props) => {
    let modal =[];
    if(props.state.features){
        console.log("MOVIES")
        modal.push(
        <MenuItem component={Link} to={'/thefirebug'} name='THE FIREBUG' key={1} id="thefirebug" state ={props.state} changeFont={props.changeFont}></MenuItem>,
        // <MenuItem component={Link} to={'/generations'} name='GENERATIONS' key={2} id="generations" state ={props.state} changeFont={props.changeFont}></MenuItem>
        )
    }else if(props.state.shorts){
        // modal.push(<MenuItem component={Link} to={'/thenightfromhell'} name='The Night From Hell' key={3} id="thenightfromhell" state ={props.state} changeFont={props.changeFont}></MenuItem>)
    }

    return(
    <div className="modal-view">
    {modal}
    </div>
    )

};

export default Modal;