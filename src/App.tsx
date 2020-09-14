import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    let [counter, setCounter] = useState<number>(0)

    const maxNumber = 5;
    const minNumber = 0;

    const increment = () => {
        let newCounter = counter + 1
        setCounter(newCounter)
    }
    const reset = () => {
        setCounter(0)
    }

    return (
        <div className="App">
            <Counter counter={counter}
                     increment={increment}
                     reset={reset}
                     maxNumber={maxNumber}
                     minNumber={minNumber}
            />
        </div>
    );
}

export default App;
