import React, { useState, useEffect } from 'react';
import { User } from '../interfaces/Users';
import { useParams } from 'react-router-dom';

interface EditUserProps {
    users: User[];
    onUpdateUser: (updatedUsers: User[]) => void;
}

export const EditUser: React.FC<EditUserProps> = ({ users, onUpdateUser }) => {
    const { userid } = useParams<{ userid: string }>();
    const user = users?.find((u) => u.id === Number(userid));

    const [name, setName] = useState(user?.name || '');
    const [age, setAge] = useState<number>(user?.age || 0);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setAge(user.age);
        }
    }, [user]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            const updatedUser = { ...user, name, age };
            const updatedUsers = users.map((u) =>
                u.id === user.id ? updatedUser : u
            );
            onUpdateUser(updatedUsers);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                    />
                </label>
            </div>
            <button type="submit">Save</button>
        </form>
    );
};
