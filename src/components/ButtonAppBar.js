import React from 'react';
import './ButtonAppBar.css';
import '../App';
import {Container} from "@material-ui/core";
import Calculator from './Calculator';
import Dictionary from './dictionary/Dictionary';
import {Link } from 'react-router-dom';

function ButtonAppBar(){
    return (
      <nav >
        <h1 text-size="8px">VIRTUAL CLASSROOM</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/calculator">
            <li>Calculator</li>
          </Link>
          <Link to="/dictionary">
            <li>Dictionary</li>
          </Link>
          
        </ul>
      </nav>
    );
  }


export default ButtonAppBar;
