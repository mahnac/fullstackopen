import React from 'react'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {name: 'Fundamentals of React', exercises: 10},
            {name: 'Using props to pass data', exercises: 7},
            {name: 'State of a component', exercises: 14}
        ]
    }

    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    );
}

const Header = ({course}) => {
    return <h1>{course.name}</h1>
}

const Content = ({course}) => {
    console.log(course)
    return (
        <>
            {course.parts.map((part, index) => <Part key={index} name={part.name} exercises={part.exercises}/>)}
        </>
    )
}

const Part = ({name, exercises}) => {
    return (
        <>
            <p>
                {name} {exercises}
            </p>
        </>
    )
}

const Total = ({course}) => {
    console.log(course)
    return (
        <>
            <p>Number of
                exercises {course.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0)}</p>
        </>
    )
}


export default App
