import React from 'react';
import Form from './Form';

function Person(props) {
	return (
		<>
			{props.newMember.map((person, index) =>
				<div>
					<h2>{person.name}</h2>
				</div>
			)}
		</>
	);
}

export default Person;