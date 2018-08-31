import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    addName = (event) => {
        event.preventDefault();
        console.log(event.target);
        this.setState({
            persons: this.state.persons.concat({ name: event.target.value }),
            newName: ''
        });
    };

    handleNameChange = (event) => {
        console.log(event.target.value);
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
                ...
            </div>
        )
    }
}

export default App