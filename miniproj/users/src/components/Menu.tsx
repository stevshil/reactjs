import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link> &nbsp; 
                <Link to="/users">User List</Link> &nbsp; 
                <Link to="/users/add">Add User</Link> &nbsp;
            </div>
        </div>
    )
}