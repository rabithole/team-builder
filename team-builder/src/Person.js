import React from 'react';
// import Form from './Form';

function Person(props) {
	console.log(props);
	return (
		<div>
			{props.member.map((person, index) => (
				<div className='person'>
					<h2>Name: {person.name}</h2>
					<h2>Email: {person.email}</h2>
					<h2>Role: {person.role}</h2>
				</div>
			))}
		</div>
	);
}

export default Person;