import {people} from './people';
import { PersonModel } from './Person';
import './Peoples.css';

// Component reads in JSON data and validates against the PersonModel - Fails compile if data is not valid
export function Peoples() {
    const users = people.map((user: PersonModel) => (
        <tr id={user.name}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
        </tr>
    ))

    return (
        <>
            <center>
            <table>
                <th>Name</th><th>Age</th><th>Gender</th>
            {users}
            </table>
            </center>
        </>
    )
}