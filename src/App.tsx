import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";

function App() {
    let [counter, setCounter] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [max, setMax] = useState<number>(maxValue)
    let [min, setMin] = useState<number>(startValue)

    const increment = () => {
        setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(startValue)
    }

    const startValueChange = (value: number) => {
        setMin(value)
    }
    const maxValueChange = (value: number) => {
        setMax(value)
    }

    const setValueSettings = () => {
        setStartValue(min)
        setCounter(min)
        setMaxValue(max)
    }

    return (
        <div className="App">
            <CounterSettings
                startValueChange={startValueChange}
                maxValueChange={maxValueChange}
                min={min}
                max={max}
                setValueSettings={setValueSettings}
            />
            <Counter counter={counter}
                     increment={increment}
                     reset={reset}
                     maxValue={maxValue}
                     startValue={startValue}
                     min={min}
                     max={max}
            />
        </div>
    );
}

export default App;
