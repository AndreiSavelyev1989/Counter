import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    incrementAC,
    resetAC,
    setStartCounterValueAC,
    setMaxCounterSettingsValueAC,
    setStartCounterSettingsValueAC
} from "./state/counter-reducer";

const App = React.memo(() => {
    console.log('App rendered')

    const counter: number = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const startValue: number = useSelector<AppRootStateType, number>(state => state.counter.startCounterValue)
    const maxValue: number = useSelector<AppRootStateType, number>(state => state.counter.maxCounterValue)

    const [max, setMax] = useState<number>(maxValue)
    const [min, setMin] = useState<number>(startValue)

    const handleClick = () => console.log('click')
    useEffect(() => {
        const minValue = localStorage.getItem('minValue')
        const maxValue = localStorage.getItem('maxValue')
        setMin(Number(minValue))
        setMax(Number(maxValue))
    }, [])

    useEffect(() => {
        document.addEventListener('click', handleClick)
        localStorage.setItem('minValue', min.toString())
        localStorage.setItem('maxValue', max.toString())
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [min, max])

    const dispatch = useDispatch()

    const increment = useCallback(() => {
        dispatch(incrementAC(counter + 1))
    }, [dispatch, counter])

    const reset = useCallback(() => {
        dispatch(resetAC(startValue))
    }, [dispatch, startValue])

    const startValueChange = useCallback((value: number) => {
        setMin(value)
    }, [])
    const maxValueChange = useCallback((value: number) => {
        setMax(value)
    }, [])

    const setValueSettings = useCallback(() => {
        dispatch(setStartCounterSettingsValueAC(min))
        dispatch(setMaxCounterSettingsValueAC(max))
        dispatch(setStartCounterValueAC(min))
    }, [dispatch, min, max])

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
})

export default App;
