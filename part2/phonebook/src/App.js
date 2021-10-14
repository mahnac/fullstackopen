import React, {useEffect, useState} from 'react'
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const fetchPeople = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }

    useEffect(fetchPeople, [])

    console.log('render', persons.length, 'persons')

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter))

    const handleNameChange = event => setNewName(event.target.value)
    const handleNumberChange = event => setNewNumber(event.target.value)
    const handleFilterChange = event => setFilter(event.target.value.toLowerCase());

    const checkIfPersonWithNameExists = name => persons.some(person => person.name === name);
    const createPerson = (name, number) => {
        const newPerson = {
            name: name,
            number: number,
            id: ++persons.length
        }
        setPersons(persons.concat(newPerson))
    };
    const addPerson = event => {
        event.preventDefault()
        const personIsFound = checkIfPersonWithNameExists(newName);

        if (!personIsFound) {
            createPerson(newName, newNumber);
        } else {
            alert(`${newName} is already added to phonebook`)
        }

        // reset state
        setNewName('')
        setNewNumber('')

        // clear input fields
        event.target[0].value = '';
        event.target[1].value = '';
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onChange={handleFilterChange}/>

            <h3>Add a new Person:</h3>
            <PersonForm onSubmit={addPerson} handleNameChange={handleNameChange}
                        handleNumberChange={handleNumberChange}/>

            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow}/>
        </div>
    )
}

export default App