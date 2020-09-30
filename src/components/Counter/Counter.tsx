import React from "react";
import {Display} from "../Display/Display";
import {ButtonCounter} from "../ButtonCounter/ButtonCounter";
import styles from "./Counter.module.css"
import {CounterSettings} from "../CounterSettings/CounterSettings";

type CounterPropsType = {
    counter: number
    increment: () => void
    reset: () => void
    maxValue: number
    startValue: number
    min: number
    max: number
}

export function Counter(props: CounterPropsType) {

    return <div className={styles.counter}>
        <Display
            counter={props.counter}
            maxNumber={props.maxValue}
            min={props.min}
            max={props.max}
            startValue={props.startValue}
        />
        <ButtonCounter
            onClickCallBack={props.increment}
            disable={props.counter === props.maxValue}
            counter={props.counter}
            maxNumber={props.maxValue}
            name="Inc"
        />
        <ButtonCounter
            onClickCallBack={props.reset}
            disable={props.counter === props.startValue}
            counter={props.counter}
            maxNumber={props.maxValue}
            name="Reset"
        />

    </div>
}