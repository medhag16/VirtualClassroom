import React from "react";
import {ChatEngine} from 'react-chat-engine';
import ButtonAppBar from './components/ButtonAppBar';
import Calculator from './components/Calculator';
import Dictionary from './components/dictionary/Dictionary';
import {Container} from "@material-ui/core";
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return(
    <div className="complete-block">
      <ButtonAppBar/>
      <Container fixed>

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/dictionary' component={Dictionary}/>
          <Route path='/calculator' component={Calculator}/>
        </Switch>
        
      </Container>
    </div>
  );
}

const Home=()=>(
    
      <div className="block-size-chat"> 
        <ChatEngine 
          height='90vh'
          projectID="4aac212a-f824-4416-b240-dd3cfac270c9" 
          userName="guptamedha789"
          userSecret="A12345678" 
        />
      </div> 
    
);

 export default App;

    