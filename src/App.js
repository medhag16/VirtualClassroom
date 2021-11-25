import React, { useState } from 'react'
import ButtonAppBar from './components/ButtonAppBar';
import Calculator from './components/Calculator';
import LoginForm from './components/LoginForm';
import Dictionary from './components/dictionary/Dictionary';
import {Container} from "@material-ui/core";
import NotesFeature from './components/notesTab/NotesFeature';
import "./App.css"
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  console.log("hello");
  console.log(localStorage.getItem('username'));
  if(!localStorage.getItem('username') ) return <LoginForm/>
  return(
    <div className="complete-block">
      <ButtonAppBar/>
      <Container fixed>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/notes' component={NotesFeature}/>
          <Route path='/dictionary' component={Dictionary}/>
          <Route path='/calculator' component={Calculator}/>
        </Switch>
      </Container>
    </div>
  );
}


 export default App;

    