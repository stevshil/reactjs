export type User = {
    id: number;
    name: string;
    age: number;
}

export interface UserList {
    users: User[];
}