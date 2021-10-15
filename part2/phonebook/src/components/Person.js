import React from "react"

const Person = ({person, removePerson}) => {
    return (
        <div>
            {person.name} {person.number}
            <button value={person.id} onClick={removePerson}>remove</button>
        </div>
    )
}
export default Person