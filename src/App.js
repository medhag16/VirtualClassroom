import React, { useState } from 'react'
import ButtonAppBar from './components/appbar/ButtonAppBar';
import Calculator from './components/calculator/Calculator';
import Dictionary from './components/dictionary/Dictionary';
import GKQuiz from './components/quiz/GKQuiz';
import {Container} from "@material-ui/core";
import Bookstore from './components/books/Bookstore'
import NotesFeature from './components/notesTab/NotesFeature';
import "./App.css"
import Home from './components/home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return(
    <div className="complete-block">
      <ButtonAppBar/>
      <Container fixed>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/library' component={Bookstore}/>
          <Route path='/notes' component={NotesFeature}/>
          <Route path='/dictionary' component={Dictionary}/>
          <Route path='/calculator' component={Calculator}/>
          <Route path='/quiz' component={GKQuiz}/>
        </Switch>
      </Container>
    </div>
  );
}

 export default App;

    