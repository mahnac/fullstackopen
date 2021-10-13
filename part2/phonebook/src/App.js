import React, {useState} from 'react'

function Contact({person}) {
    return <p>{person.name} {person.number}</p>;
}

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1234567'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const checkIfPersonWithNameExists = name => persons.some(person => person.name === name);

    const createPerson = (name, number) => {
        const newPerson = {
            name: name,
            number: number
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

    const handleNameChange = event => setNewName(event.target.value)
    const handleNumberChange = event => setNewNumber(event.target.value)

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <Contact key={person.name} person={person}/>)}
        </div>
    )
}

export default App