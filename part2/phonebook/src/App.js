import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const addPerson = event => {
        event.preventDefault()
        const person = {
            name: newName
        }
        setPersons(persons.concat(person))
        setNewName('')

        // clear input field
        event.target[0].value = ''
    };

    const handleNameChange = event => setNewName(event.target.value)

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name}</p>)}
        </div>
    )
}

export default App