import React from 'react';
import Numbers from './components/Numbers';
import './App.css'
import './components/Numbers.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Arto Hellas', phone: '045-627-5288' },
                { name: 'Matti Meikäläinen', phone: '044-462-9876'},
                { name: 'Kikka Kakkonen', phone: '050-630-7300'}
            ],
            newName: '',
            newPhoneNumber: ''
        }
    }

    addPerson = (event) => {
        event.preventDefault();

        /* [0] vaaditaan targetissa:
        https://forum.freecodecamp.org/t/getting-an-input-value-when-form-is-submitted-react/161870 */
        let foundDuplicate = false;
        this.state.persons.forEach(function(person) {
            if (person.name === event.target[0].value || person.phone === event.target[1].value) {
                foundDuplicate = true;
            }
        });

        if (foundDuplicate === false) {
            const persons = this.state.persons.concat(
                { name: event.target[0].value,
                phone: event.target[1].value }
            );
            this.setState({
                persons: persons,
                newName: '',
                newPhoneNumber: ''
            });
        }
    };

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value });
    };

    handlePhoneNumberChange = (event) => {
        this.setState({ newPhoneNumber: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
                        numero: <input value={this.state.newPhoneNumber} onChange={this.handlePhoneNumberChange}/>
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