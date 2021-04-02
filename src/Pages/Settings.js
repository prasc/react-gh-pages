import React from 'react'
import Button from '../Components/Button';
import {
    Link
  } from "react-router-dom";


const Settings = () => {
    return (
        <div>
             <h2>Manage Account Settings</h2>
           
            <Link to="/changesettings"><Button color="#9652fa" textColor="white" text="Change Name"/></Link>
            <Link to="/changesettings"><Button color="#9652fa" textColor="white" text="Change Email"/></Link>
            <Link to="/changesettings"><Button color="#9652fa" textColor="white" text="Change Password"/></Link>
            <Link to="/changesettings"><Button color="#9652fa" textColor="white" text="Change Title"/></Link>
        </div>
    )
}

export default Settings
