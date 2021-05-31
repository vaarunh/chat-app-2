import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
    return (
		<ChatEngine
			height='100vh'
			userName='varun'
			userSecret='varun'
			projectID='f8728450-9fb6-4041-a3ef-55329560e884'
		/>
	);
    }
export default App