import React, { useState } from 'react';
import { UserList } from './interfaces/UserList';

export const AddUser = ({ users, onUserAdded }: UserList & { onUserAdded: (users: { id: number; name: string; age: number }[]) => void }) => {
    const [user, setUser] = useState({ name: '', age: null });
    const [newusers, setUsers] = useState(users); // Ensure users is an array
    console.log("New users:", newusers);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('User added:', user);

        const newUser = {
            id: newusers.length > 0 ? newusers[newusers.length - 1].id + 1 : 1,
            ...user,
        };

        // Add the new user to the list
        const updatedUsers = [...newusers, newUser];
        setUsers(updatedUsers);

        // Trigger the callback with the entire updated list
        onUserAdded(updatedUsers);

        // Reset the form
        setUser({ name: '', age: '' });
        console.log('Updated users:', updatedUsers);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    type="age"
                    id="age"
                    name="age"
                    value={user.age}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add User</button>
        </form>
    );
};