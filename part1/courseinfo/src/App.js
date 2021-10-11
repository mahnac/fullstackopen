import React from 'react'

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {name: 'Fundamentals of React', exercises: 10},
        {name: 'Using props to pass data', exercises: 7},
        {name: 'State of a component', exercises: 14}
    ]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>

        </div>
    );
}

const Header = ({course}) => {
    return <h1>{course}</h1>
}

const Content = (props) => {
    console.log(props)
    return (
        <>
            {props.parts.map((part, index) => <Part key={index} name={part.name} exercises={part.exercises}/> )}
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                {props.name} {props.exercises}
            </p>
        </>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <>
            <p>Number of exercises {props.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)}</p>
        </>
    )
}


export default App
