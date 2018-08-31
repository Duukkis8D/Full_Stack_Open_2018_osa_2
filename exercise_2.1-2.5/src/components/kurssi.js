import React from 'react'

const Kurssi = () => {
    const kurssit = [
        {
            id: 1,
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
        },
        {
            id: 2,
            nimi: 'Node.js',
            osat: [
                {
                    id: 1,
                    nimi: 'Routing',
                    tehtavia: 3
                },
                {
                    id: 2,
                    nimi: 'Middlewaret',
                    tehtavia: 7
                }
            ]
        }
    ];

    const Otsikko = (props) => {
        return (
            <h2>{props.kurssinNimi}</h2>
        )
    };

    const Sisalto = (props) => {
        return (
            <div>
                {props.osat.map(osa => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia}/>)}
            </div>
        )
    };

    const Osa = (props) => {
        return (
            <p>{props.nimi} {props.tehtavia}</p>
        )
    };

    const Yhteensa = (props) => {
        const yhteensaTehtavia = props.osat
            .map(obj => obj.tehtavia)
            .reduce( (a, b) => (a + b) );

        return (
            <p>yhteensä {yhteensaTehtavia} tehtävää</p>
        )
    };

    return (
        <div>
            {kurssit.map(kurssi => (
                <div key={kurssi.id}>
                    <Otsikko key={kurssi.id + 1} kurssinNimi={kurssi.nimi}/>
                    <Sisalto key={kurssi.id + 2} osat={kurssi.osat}/>
                    <Yhteensa key={kurssi.id + 3} osat={kurssi.osat}/>
                </div>
            ))}
        </div>
    )
};

export default Kurssi