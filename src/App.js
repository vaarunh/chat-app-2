import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
		<ChatEngine
			height='100vh'
			projectID='f8728450-9fb6-4041-a3ef-55329560e884'
			userName='varun'
			userSecret='varun'
			renderChatFeed={(chatAppProps)=> <ChatFeed{...chatAppProps} />}
		/>
	);
    }
export default App