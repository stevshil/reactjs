import { PersonModel } from './Person.tsx'
import { MyComp, MyComp2 } from './MyComp.tsx'
import './Steve.css'

export function Steve() {
    const Steve: PersonModel = {
      name: "Steve",
      age: 21,
      gender: "M"
    }
  
    return (
      <>
        <div>Hello World</div>
        <MyComp person={Steve} /> {/* The actual method name is required for interface as we are passing an object */}
        <MyComp2 {...Steve} /> {/* The spread operator can be used for type as it is more like a dictionary */}
      </>
    )
  }