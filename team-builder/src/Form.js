import React, { useState } from 'react';
import Person from './Person';
import './App.css';

const Form = props => {
	const members = [{ 
		name: 'test', 
		email: 'test',
		role: 'test'
	}]
	const [newMember, addMember] = useState(members);

	const handleChange = event => {
		addMember({ ...newMember, 
			[event.target.name]: event.target.value });
		console.log(event.target.value)
		console.log(members);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(members)

	};

	return (
		<div>
		<form onSubmit={handleSubmit}>
			<h3>Awesome Team Members!</h3>
			<input 
				type='text'
				name='name'
				placeholder='FULLNAME'
				onChange={handleChange}
				value={newMember.name}
			/>
			<input 
				type='text'
				name='email'
				placeholder='EMAIL'
				onChange={handleChange}
				value={newMember.email}
			/>
			<input
				type='text'
				name='role'
				placeholder='ROLE'
				onChange={handleChange}
				value={newMember.role}
			/>
			<button type='submit'>ADD YOURSELF NOW</button>

		</form>
		<Person person={members} />
		</div>
	);
} 

export default Form