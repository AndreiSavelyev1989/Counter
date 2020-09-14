import React from "react";
import styles from "./Button.module.css"

type ButtonPropsType = {
    onClickCallBack: () => void
    disable: boolean
    name: string
    counter: number
    maxNumber: number
}

export function Button(props: ButtonPropsType) {
    return <div className={styles.button_wrapper}>
            <button
                onClick={props.onClickCallBack}
                disabled={props.disable}
                className={`${styles.button} ${props.counter === props.maxNumber && props.disable ? styles.red : "" || props.disable ? styles.red : ""}`}
            >{props.name}</button>
    </div>
}