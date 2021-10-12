import React, {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    const sum = () => {
      return good + neutral + bad
    }
    const average = () => {
      return good + bad * -1 / 3
    }
    const positive = () => {
      return good / (bad + neutral + good) * 100
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text="good"/>
            <Button onClick={handleNeutralClick} text="neutral"/>
            <Button onClick={handleBadClick} text="bad"/>

            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {sum()}</p>
            <p>average {average()}</p>
            <p>positive {positive()} %</p>
        </div>

    )
}

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} type="submit">{text}</button>
    )
}

export default App