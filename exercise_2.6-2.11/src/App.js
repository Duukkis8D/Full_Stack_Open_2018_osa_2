import React from 'react';
import PersonsList from './components/PersonsList';
import Filter from './components/Filter';
import AddPerson from './components/AddPerson';
import './App.css'
import './components/Numbers.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Arto Hellas', phone: '045-627-5288' },
                { name: 'Matti Meikäläinen', phone: '044-462-9876'},
                { name: 'Kikka Kakkonen', phone: '050-630-7300'},
                { name: 'Martti Tienari', phone: '040-123456' },
                { name: 'Arto Järvinen', phone: '040-123456' },
                { name: 'Lea Kutvonen', phone: '040-123456' }
            ],
            newName: '',
            newPhoneNumber: '',
            search: '',
            showAll: true
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
    };

    handleSearch = (event) => {
        this.setState({
            search: event.target.value,
            showAll: false
        });
        if (event.target.value === '') this.setState({ showAll: true })
    };

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <Filter search={this.state.search} handleSearch={this.handleSearch}/>
                <form onSubmit={this.addPerson}>
                    <AddPerson newName={this.state.newName}
                               newPhoneNumber={this.state.newPhoneNumber}
                               handleNameChange={this.handleNameChange}
                               handlePhoneNumberChange={this.handlePhoneNumberChange}/>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <PersonsList persons={this.state.persons} showAll={this.state.showAll} search={this.state.search}/>
            </div>
        )
    }
}

export default App