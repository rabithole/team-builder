import React from 'react';
import { useState } from 'react';
import './App.css';

const Form = props => {
	const addTeamMembers = {
		name: '', 
		email: '',
		role: ''
	}

	const [newMember, addNewMember] = useState();

	const handleChange = event => {
		addNewMember({
			...newMember,
			[event.target.name]: event.target.value
		});
	};

	return (
		<form>
			<h3>Awesome Team Members!</h3>
			<input 
				type='text'
				name='name'
				placeholder='FULLNAME'
			/>
			<input 
				type='text'
				name='email'
				placeholder='EMAIL'
			/>
			<input
				type='text'
				name='role'
				placeholder='ROLE'
			/>

			<button>ADD YOURSELF NOW</button>
		</form>
	);
} 

export default Form