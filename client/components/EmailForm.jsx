import React from 'react';
import MenuItem from '../components/MenuItemComponent.jsx';
import { Link } from 'react-router-dom';
import { Switch, Route, withRouter } from 'react-router-dom';

const EmailModal = props => {
    

    return(
    <div className="modal-view">
    <h1>NAME:
        EMAIL: 
    </h1>


    <br></br>

                        <br>
                        </br>
                        

                        <form>
                        <label>
                            Name:
                        <input type="text" name="name" />
                        </label>
                        <label>
                        <input type="text" name="email" />
                        </label>
                        <input type="submit" value="Submit" />
                            </form>

                        <br>
                        </br>
                        <br>
                        </br>
    </div>
    )

};

export default EmailModal;