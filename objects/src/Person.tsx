export type PersonModel = {
    name: string;
    age: number;
    gender: string;
}

export interface PersonProps {
    person: PersonModel;
}