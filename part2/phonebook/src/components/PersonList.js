import React from "react"
import PersonItem from "./Person"

const PersonList = ({personsToShow, removePerson}) => <>
    {personsToShow.map(person =>
        <PersonItem
            key={person.id}
            person={person}
            removePerson={removePerson}
        />)}
</>

export default PersonList