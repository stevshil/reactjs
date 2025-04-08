import { PersonProps, PersonModel } from './Person.tsx';

// Using an interface - good for building extensile components
export const MyComp = (props: PersonProps) => {
    const person = props.person;
    return <h1>{person.name} {person.age}</h1>
}

export const MyComp2 = (props: PersonModel) => {
    const person = props;
    return <h1>{person.name} {person.age}</h1>
}