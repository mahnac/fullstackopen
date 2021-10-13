import React from "react";

const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}
const Total = ({course}) => {
    const reducer = (previousValue, currentValue) => {
        console.log("whats", previousValue, currentValue)
        return previousValue + currentValue.exercises;
    }

    const total = course.parts.reduce(reducer, 0)
    return (
        <p><strong>Number of exercises {total}</strong></p>
    )
}
const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}
const Content = ({course}) => {
    return (
        <div>
            {course.parts.map(part => <Part key={part.id} part={part}/>)}
        </div>
    )
}
const Course = ({course}) => {
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

export default Course