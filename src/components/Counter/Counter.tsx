import React from "react";
import {Display} from "../Display/Display";
import {ButtonCounter} from "../universal_components/ButtonCounter/ButtonCounter";
import styles from "./Counter.module.css"

type CounterPropsType = {
    counter: number
    increment: () => void
    reset: () => void
    maxValue: number
    startValue: number
    min: number
    max: number
}

export const Counter = React.memo((props: CounterPropsType) => {
    console.log('Counter rendered')
    return <div className={styles.counter}>
        <Display
            counter={props.counter}
            maxNumber={props.maxValue}
            min={props.min}
            max={props.max}
            startValue={props.startValue}
            maxValue={props.maxValue}
        />
        <ButtonCounter
            onClickCallBack={props.increment}
            disable={props.counter === props.maxValue || props.min !== props.startValue || props.max !== props.maxValue}
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
})