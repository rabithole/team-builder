import React from 'react';
// import Form from './Form';

function Person(props) {
	console.log(props);
	return (
		<div>
			{props.person.map((person, index) => (
				<div className='person'>
					<h2>{person.name}</h2>
					<h2>{person.email}</h2>
					<h2>{person.role}</h2>
				</div>
			))}
		</div>
	);
}

export default Person;