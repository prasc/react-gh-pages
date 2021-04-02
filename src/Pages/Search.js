import React from 'react'
import Button from '../Components/Button';
import {
    Link
  } from "react-router-dom";


const Search = () => {
    return (
        <div>
             <h2>Create New Search</h2>
             <Link to="/addsearch"><Button color="#7c487c" textColor="white" text="Adding committee  chair"/></Link>
             <Link to="/addsearch"><Button color="#7c487c" textColor="white" text="Adding sub-comittee members"/></Link>
             <Link to="/addsearch"><Button color="#7c487c" textColor="white" text="Adding position and date"/></Link>
        </div>
    )
}

export default Search
