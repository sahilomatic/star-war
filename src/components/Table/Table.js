import React from "react";
import './Table.css';



export default function Table(props) {
    return (
        <div>
            <table
                style={{ width: "80%", padding: 10, marginTop: 15 }}
                className="table table-dark table-striped margin-top table-hover shadows"
            >
                <thead>
            <tr className="table-warning" style={{ color: "black" }}>
                <th >Name</th>
                <th>Gender</th>
                
                <th>Home Planet</th>
                <th>Details</th>
                
            </tr>
        </thead>
                
                <tbody>{props.characters.map((character)=>{
                    return <tr className="altFont" key={character.name}>
                    <td>{character.name}</td>
                    <td >{character.gender}</td>
                    
                    <td>{character.homePlanet?character.homePlanet:'-'}</td>
                    <td><span className = "clickable"  onClick={()=>{props.setSelectedChar(character)}}>👆 Details </span></td>
                   
                </tr>
                })}
</tbody>
                
            </table>
        </div>
    );
}
