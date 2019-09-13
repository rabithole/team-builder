import React, { useState } from 'react';
import './App.css';


const Form = props => {
	const Person = {
		name: '',
		email: '',
		role: ''
	}
	const [newPerson, addNewMember] = useState(Person);

	const handleChange = event => {
		addNewMember({
			...newPerson,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		props.addMember([newPerson, ...props.member]);
		resetForm();
	}

	const resetForm = () => {
		addNewMember(Person);
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
				value={newPerson.name}
			/>
			<input 
				type='text'
				name='email'
				placeholder='EMAIL'
				onChange={handleChange}
				value={newPerson.email}
			/>
			<input
				type='text'
				name='role'
				placeholder='ROLE'
				onChange={handleChange}
				value={newPerson.role}
			/>
			<button type='submit'>ADD YOURSELF NOW</button>

		</form>
		</div>
	);
} 

export default Form