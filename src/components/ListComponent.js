
import React from 'react'


function ListComponent() {
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'

    ];
    const listItems = people.map(data =>
        <li><List data={data} /></li>
    );


    return (
        <div>

            <div> <h4> list without Any loops : </h4>
                <ul>
                   
                    <li>Creola Katherine Johnson: mathematician</li>
                    <li>Mario José Molina-Pasquel Henríquez: chemist</li>
                    <li>Mohammad Abdus Salam: physicist</li>
                    <li>Percy Lavon Julian: chemist</li>
                    <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
                </ul>
            </div>

            <div>
                <h4> List using List Component with loops </h4>

                {listItems}
            </div>

        </div>
    )
}
const List = ({ data }) => {

    return (
        <div>
            <li> {data}</li>
        </div>
    )
}

export default ListComponent
