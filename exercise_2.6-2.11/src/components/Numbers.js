import React from 'react';

const Numbers = (props) => {
    const persons =
        props.showAll ?
            props.persons :
            props.persons.filter(person => person.name === props.search);

    return (
        <table>
            <thead><tr><th></th></tr></thead>
            <tbody>
            {persons.map(person => <tr key={person.name}>
                                                <td key={person.name}>{person.name}</td>
                                                <td key={person.phone}>{person.phone}</td>
                                    </tr>)}
            </tbody>
        </table>
    )
};

export default Numbers