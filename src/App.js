import React from "react";
import {ChatEngine} from 'react-chat-engine';
import ButtonAppBar from './components/ButtonAppBar';
import Calculator from './components/Calculator';
import Dictionary from './components/Dictionary';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <div>
      <div className="App">
        <ButtonAppBar/>
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/dictionary" component={Dictionary}/>
          <Route path="/calculator" component={Calculator}/>
        </Routes>
        <Home/>
      </div>
    </div>
  );
}

export const Home=()=>{
  return(
    <div class="block-size-chat">
      <ChatEngine 
        height='90vh'
        projectID="4aac212a-f824-4416-b240-dd3cfac270c9" 
        userName="guptamedha789"
        userSecret="A12345678" 
      />
    </div> 
  );
}

 export default App;

    