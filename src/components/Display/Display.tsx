import React from "react";
import styles from "./Display.module.css"

type DisplayPropsType = {
    counter: number
    maxNumber: number
    min: number
    max: number
    startValue: number
    maxValue: number
}

export function Display(props: DisplayPropsType) {
    console.log('Display rendered')
    const displayResult = () => {
        if (props.min < 0 || props.max < 0 || props.min === props.max || props.max < props.min) {
            return <div className={styles.incorrectValue}>"Incorrect value!"</div>
        } else if (props.startValue === props.min && props.maxValue === props.max) {
            return props.counter
        } else {
            return "Enter values and press 'set'!"
        }
    }
    return <div className={`${styles.display} 
    ${props.counter === props.maxNumber ? styles.displayRed : ""}
    ${props.min < 0 || props.max < 0 || props.min === props.max || props.max < props.min ? styles.displayRed : ""}
    `}>
        <div className={props.counter === props.maxNumber ? styles.red : ""}>
            {displayResult()}
        </div>
    </div>
}