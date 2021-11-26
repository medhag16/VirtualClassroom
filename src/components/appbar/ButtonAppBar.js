import React from "react";
import './ButtonAppBar.css';

import {Link } from "react-router-dom";

function ButtonAppBar(){
    return (
      <nav >
        <h1 text-size="8px">VIRTUAL CLASSROOM </h1>
        <ul>
        <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/notes">
          <Link to="/library">
            <li>Library</li>
          </Link>
            <li>Notes</li>
          </Link>
          <Link to="/dictionary">
            <li>Dictionary</li>
          </Link>
          <Link to="/quiz">
            <li>Quiz</li>
          </Link>
          <Link to="/calculator">
            <li>Calculator</li>
          </Link>
          
        </ul>
      </nav>
    );
  }


export default ButtonAppBar;
