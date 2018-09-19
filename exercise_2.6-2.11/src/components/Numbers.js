import React from 'react';

const Numbers = (props) => {
    return (
        <ul>
            {props.persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
    )
};

export default Numbers