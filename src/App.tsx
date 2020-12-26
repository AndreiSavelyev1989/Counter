import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    incrementAC,
    resetAC,
    setCounterAC,
    setMaxCounterValueAC,
    setStartCounterValueAC
} from "./state/counter-reducer";

function App() {
    console.log('App rendered')
    const counter: number = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const startValue: number = useSelector<AppRootStateType, number>(state => state.counter.startCounterValue)
    const maxValue: number = useSelector<AppRootStateType, number>(state => state.counter.maxCounterValue)

    const [max, setMax] = useState<number>(maxValue)
    const [min, setMin] = useState<number>(startValue)

    const dispatch = useDispatch()

    const increment = () => {
        dispatch(incrementAC(counter + 1))
    }
    const reset = () => {
        dispatch(resetAC(startValue))
    }

    const startValueChange = (value: number) => {
        setMin(value)
    }
    const maxValueChange = (value: number) => {
        setMax(value)
    }

    const setValueSettings = () => {
        dispatch(setStartCounterValueAC(min))
        dispatch(setCounterAC(min))
        dispatch(setMaxCounterValueAC(max))
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
