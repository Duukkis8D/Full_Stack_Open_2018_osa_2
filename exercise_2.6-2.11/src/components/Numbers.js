import React from 'react';

const Numbers = (props) => {
    return (
        <table>
            <thead><tr><th></th></tr></thead>
            <tbody>
            {props.persons.map(person => <tr key={person.name}>
                                                <td key={person.name}>{person.name}</td>
                                                <td key={person.phone}>{person.phone}</td>
                                        </tr>)}
            </tbody>
        </table>
    )
};

export default Numbers