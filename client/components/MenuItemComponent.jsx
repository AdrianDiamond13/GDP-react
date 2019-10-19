import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
    //Change menu item style based on state. From gray to green if it's clicked.
    let menu_item_class = props.state[props.id]? "greentext":"graytext";
        
        return(
            <props.component className={menu_item_class} to={props.to} id={props.id} onClick={(e) => props.changeFont(e) }>{props.name}</props.component>
        )

};

export default MenuItem;