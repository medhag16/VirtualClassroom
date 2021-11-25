import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import RandomQuote from '../randomQuote';
import './Home.css'

const Home= () => {

    const [username, setUsername] = useState('')

	function createDirectChat(creds) {
        
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

    return(
        <div className="complete-block">
        <div className="quote-generator">
          <RandomQuote/>
        </div> 
        <div className="block-size-chat">
          <ChatEngine 
            height='91vh'
            projectID="4aac212a-f824-4416-b240-dd3cfac270c9" 
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderNewChatForm={(creds) => renderChatForm(creds)}
          />
        </div>
        
      </div>
    );
       
}

export default Home;
