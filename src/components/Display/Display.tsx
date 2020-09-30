import React from "react";
import styles from "./Display.module.css"

type DisplayPropsType = {
    counter: number
    maxNumber: number
    min: number
    max: number
    startValue: number
}

export function Display(props: DisplayPropsType) {
    const displayResult = () => {

        if (props.min < 0 || props.max < 0 || props.min === props.max || props.max < props.min) {
            return "Incorrect value!"
        }
        else if (props.startValue === props.min) {
            return props.counter
        }
        else{
            return "Enter values and press 'set'!"
        }
    }
    return <div className={`${styles.display} ${props.counter === props.maxNumber ? styles.displayRed : ""}`}>
        <div className={props.counter === props.maxNumber ? styles.red : ""}>
            {displayResult()}
        </div>
    </div>
}