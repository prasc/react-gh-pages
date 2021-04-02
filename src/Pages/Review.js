import React from 'react'
import Button from '../Components/Button';
import {
    Link
  } from "react-router-dom";


const Review = () => {
    return (
        <div>
             <h2>List and Review  Applications</h2>
            <Button color="#34047c" textColor="white" text="View Profile"/>
            <Link to="/leavecomment"><Button color="#34047c" textColor="white" text="Leave Comments"/></Link>
            <Link to="/changeappstatus"><Button color="#34047c" textColor="white" text="Change Application Status"/></Link>
            <Button color="#34047c" textColor="white" text="Perform Faculty Review"/>
            <Button color="#34047c" textColor="white" text="Assign Faculty Review"/>
        </div>
    )
}

export default Review
