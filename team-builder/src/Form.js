import React from 'react';
import { useState } from 'react';
import './App.css';

const Form = props => {
	// const addTeamMembers = [
	// 	{
	// 		name: '', 
	// 		email: '',
	// 		role: ''
	// 	}
	// ];

	const [newMember, addNewMember] = useState([
			{
			name: '', 
			email: '',
			role: ''
		}
	]);

	const handleChange = event => {
		console.log('Handle Change')
		addNewMember({
			...newMember,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		addNewMember([newMember, ...newMember]);
	}

	return (
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
	);
} 

export default Form