import React from "react";
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import styles from "./Counter.module.css"

type CounterPropsType = {
    counter: number
    increment: () => void
    reset: () => void
    maxNumber: number
    minNumber: number
}

export function Counter(props: CounterPropsType) {

    return <div className={styles.counter}>
        <Display
            counter={props.counter}
            maxNumber={props.maxNumber}/>
        <Button
            onClickCallBack={props.increment}
            disable={props.counter === props.maxNumber}
            counter={props.counter}
            maxNumber={props.maxNumber}
            name="Inc"/>
        <Button
            onClickCallBack={props.reset}
            disable={props.counter === props.minNumber}
            counter={props.counter}
            maxNumber={props.maxNumber}
            name="Reset"/>
    </div>
}