import React from 'react'
import Button from '../Components/Button';
import {
    Link
  } from "react-router-dom";


const Homepage = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to="/search"><Button color="#fe80eb" text="Create New Search"/></Link>
            <Link to="/review"><Button color="#fe80eb" text="Review Existing Applicants"/></Link>
            <Link to="/settings"><Button color="orange" text="Account Settings"/></Link>
        </div>
    )
}

export default Homepage
