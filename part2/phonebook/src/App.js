import React, {useState} from 'react'
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

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