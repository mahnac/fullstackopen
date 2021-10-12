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
        return (good + (bad * -1)) / sum()
    }
    const positive = () => {
        return `${good / (bad + neutral + good) * 100} %`
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text="good"/>
            <Button onClick={handleNeutralClick} text="neutral"/>
            <Button onClick={handleBadClick} text="bad"/>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                sum={sum()}
                average={average()}
                positive={positive()}
            />
        </div>
    );
}

const Statistics = ({good, bad, neutral, sum, average, positive}) => {
    if (sum > 0) {
        return (
            <div>
                <h1>statistics</h1>
                <table>
                    <tbody>
                    <StatisticsLine text="good" value={good}/>
                    <StatisticsLine text="neutral" value={neutral}/>
                    <StatisticsLine text="bad" value={bad}/>
                    <StatisticsLine text="all" value={sum}/>
                    <StatisticsLine text="average" value={average}/>
                    <StatisticsLine text="positive" value={positive}/>
                    </tbody>
                </table>
            </div>
        );
    }
    return <p>No feedback given</p>
}

const StatisticsLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} type="submit">{text}</button>
    )
}

export default App