import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './components/kurssi'

const App = () => {
    return (
        <div>
            <h1>Opetusohjelma</h1>
            <Kurssi/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);