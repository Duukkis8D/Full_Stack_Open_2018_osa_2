import React from 'react';
import Numbers from './components/Numbers';
import './components/Numbers.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    addName = (event) => {
        event.preventDefault();

        /* [0] vaaditaan targetissa:
        https://forum.freecodecamp.org/t/getting-an-input-value-when-form-is-submitted-react/161870 */
        let foundDuplicate = false;
        this.state.persons.forEach(function(person) {
            if (person.name === event.target[0].value) foundDuplicate = true;
        });

        if (foundDuplicate === false) {
            const persons = this.state.persons.concat({ name: event.target[0].value });
            this.setState({
                persons: persons,
                newName: ''
            });
        }
    };

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value });
    };

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addName}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <Numbers persons={this.state.persons}/>
            </div>
        )
    }
}

export default App