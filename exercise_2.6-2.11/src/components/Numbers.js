import React from 'react';

const Numbers = (props) => {
    return (
        <table>
            {props.persons.map(person => <tr key={person.name}>
                                                <td key={person.name}>{person.name}</td>
                                                <td key={person.phone}>{person.phone}</td>
                                        </tr>)}
        </table>
    )
};

export default Numbers