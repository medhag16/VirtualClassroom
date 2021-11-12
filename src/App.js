import React from "react";
import {ChatEngine} from 'react-chat-engine';
import "./App.css"

function App() {
  return(
    <div>
      <ChatEngine 
            height='100vh'
            projectID="4aac212a-f824-4416-b240-dd3cfac270c9" 
            userName="guptamedha789"
            userSecret="A12345678" 
      />
    </div>
  );
}

 export default App;

