import React from "react";
import styles from "./Display.module.css"

type DisplayPropsType = {
    counter: number
    maxNumber: number
}

export function Display(props: DisplayPropsType) {
    return <div className={`${styles.display} ${props.counter === props.maxNumber ? styles.displayRed : ""}`}>
        <div className={props.counter === props.maxNumber ? styles.red: ""}>
            {props.counter}
        </div>
    </div>
}