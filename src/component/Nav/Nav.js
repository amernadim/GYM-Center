import React from 'react';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div>
   <div className="navbar bg-base-100">
  <a href='/' className="btn btn-ghost normal-case text-2xl"><FontAwesomeIcon icon={faCode} className="mr-4" /> Tiger Gym</a>
   </div>
    </div>
  );
};

export default Nav;