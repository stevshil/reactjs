import {UserList, User} from '../interfaces/Users';
import { Link } from 'react-router-dom';

export const ListUsers = ({users}: UserList) => {
    console.log("ListUsers: ",typeof(users));
    console.log("ListUsers: ",(users));
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h2>User List</h2>
            <table>
                <tbody>
                {Array.isArray(users) ? users.map((user: User) => (
                    <tr key={user.id}>
                        <td><Link to={`/users/edit/${user.id}`}>{user.id}</Link></td>
                        <td>{user.name}</td>
                        <td>{user.age} years old</td>
                    </tr>
                )) : <tr><td colSpan={3}>No users available</td></tr>}
                </tbody>
            </table>
        </div>
    );
}