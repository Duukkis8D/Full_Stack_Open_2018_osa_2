import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            search: ''
        };
    }

    componentDidMount() {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                this.setState({ countries: response.data });
            });
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    };

    countriesToShow = () => {
        const countriesToShow =
            this.state.search === '' ?
                [] :
                this.state.countries.filter(
                    country =>
                        country.name.toUpperCase().includes( this.state.search.toUpperCase() ) );
        if (countriesToShow.length > 10) {
            return (
                <div>
                    find countries: <input value={this.state.search} onChange={this.handleSearch}/>
                    <p>too many matches, specify another filter</p>
                </div>
            )
        }
        if (countriesToShow.length === 1) {
            const country = countriesToShow.find(
                country => country.name.toUpperCase().includes( this.state.search.toUpperCase() ) );
            return (
                <div>
                    find countries: <input value={this.state.search} onChange={this.handleSearch}/>
                    <h1>{country.name}</h1>
                    <p>capital: {country.capital}</p>
                    <p>population: {country.population}</p>
                    <br></br><img src={country.flag} alt={country.name} width="500"/>
                </div>
            )
        }
        return (
            <div>
                find countries: <input value={this.state.search} onChange={this.handleSearch}/>
                <ul>
                    { countriesToShow.map( country =>
                        <li key={country.name}>{country.name}</li> )
                    }
                </ul>
            </div>
        )
    };

    render() {
        return (<div> {this.countriesToShow()} </div>)
    }
}

export default App