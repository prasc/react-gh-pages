import React from 'react';
import {
    Link
  } from "react-router-dom";
  import home from '../home.png';



const Header = () => {
    return (
        <div>
            <Link to="/home"><img src={home} width="100" height="100"/></Link>  
            <Link to="/home"><h1 class="hireter">Hire-ter</h1></Link>
        </div>
    )
}

export default Header
