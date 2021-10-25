import React, {useEffect, useState} from 'react'
import Filter from "./components/Filter"
import PersonList from "./components/PersonList"
import PersonForm from "./components/PersonForm"
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [successMsg, setSuccessMsg] = useState(null)

    const fetchPersons = () => {
        console.log('effect')
        personService.getAll().then(initialPersons => setPersons(initialPersons))
    }

    useEffect(fetchPersons, [])

    console.log('render', persons.length, 'persons')

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter))

    const handleNameChange = event => setNewName(event.target.value)
    const handleNumberChange = event => setNewNumber(event.target.value)
    const handleFilterChange = event => setFilter(event.target.value.toLowerCase())
    const removePerson = (event) => {
        const personName = event.target.previousSibling.previousSibling.previousSibling.data
        const personId = parseInt(event.target.value)
        if (window.confirm(`Remove ${personName} ?`)) {
            setPersons(persons.filter(person => person.id !== personId))
            personService.remove(personId)
        }
    }

    const findPerson = name => persons.find(person => person.name === name)
    const createPerson = (name, number) => {
        const newPerson = {
            name: name,
            number: number,
        }
        personService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
            })
            .then(() => {
                setSuccessMsg(`${newPerson.name} was added.`)
                setTimeout(() => {
                    setSuccessMsg(null)
                }, 5000)
            })
    }

    const updatePerson = (number, person) => {
        const changedPerson = {...person, number: number}
        personService.update(person.id, changedPerson).then(changedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : changedPerson))
        })
    }

    const addPerson = event => {
        event.preventDefault()
        const person = findPerson(newName)

        if (!person) {
            createPerson(newName, newNumber)
        } else {
            if (window.confirm(`${person.name} is already added to the phonebook, replace the old number with a new one?`)) {
                updatePerson(newNumber, person)
            }
        }

        // reset state
        setNewName('')
        setNewNumber('')

        // clear input fields
        event.target[0].value = ''
        event.target[1].value = ''
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onChange={handleFilterChange}/>

            <h3>Add a new Person:</h3>
            <PersonForm onSubmit={addPerson} handleNameChange={handleNameChange}
                        handleNumberChange={handleNumberChange}/>
            <Notification message={successMsg}/>
            <h3>Numbers</h3>
            <PersonList removePerson={removePerson} personsToShow={personsToShow}/>
        </div>
    )
}

const Notification = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className="success">
            {message}
        </div>
    )
}

export default App