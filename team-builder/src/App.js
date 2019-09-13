import React, { useState } from 'react';
import Person from './Person';
import './App.css';
import Form from './Form';

function App() {
	const [member, addMember] = useState([ 
		{ 
			name: 'Bob', 
			email: 'lsdfkjdf@gmail.com',
			role: 'nothing'
		}
	]);
	return (
	    <div className="App">
	      <header className="App-header">
	        <Form member={member} addMember={addMember} />
	        <Person member={member}/>
	      </header>
	    </div>
	);
}

export default App;
