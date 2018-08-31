import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <Kurssi/>
    )
}

const Kurssi = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                id: 1,
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                id: 2,
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                id: 3,
                nimi: 'Komponenttien tila',
                tehtavia: 14
            },
            {
                id: 4,
                nimi: 'Redux',
                tehtavia: 7
            }
        ]
    }

    return (
        <div>
            <Otsikko kurssi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            {props.osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia}/>)}
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    console.log(typeof props.osat[0].tehtavia);
    const reducer = (prev, cur) => ({tehtavalkm: prev.tehtavalkm + cur.tehtavalkm});
    const yhteensaTehtavia = props.osat.reduce(reducer).tehtavalkm;
    console.log(yhteensaTehtavia);

    return (
        /*<p>yhteensä x tehtävää</p>*/
        <p>yhteensä {yhteensaTehtavia} tehtävää</p>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)