import React from 'react';
import "./ButtonAppBar.css";
import Calculator from './Calculator';
import Dictionary from './Dictionary';
import App from '../App';
import {Link } from 'react-router-dom';

function ButtonAppBar(){
    return (
      <nav >
        <h1 text-size="10px">VIRTUAL CLASSROOM</h1>
        <ul class="app-bar-menu">
          <Link to="/calculator">
            <li>Calculator</li>
          </Link>
          <Link to="/dictionary">
            <li>Dictionary</li>
          </Link>
          <Link to="/books">
            <li>Books</li>
          </Link>
        </ul>
      </nav>
    );
  }


export default ButtonAppBar;
