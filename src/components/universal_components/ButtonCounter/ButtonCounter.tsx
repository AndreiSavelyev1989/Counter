import React from "react";
import styles from "./ButtonCounter.module.css"
import {Button} from "@material-ui/core";

type ButtonPropsType = {
    onClickCallBack: () => void
    disable: boolean
    name: string
    counter?: number
    maxNumber?: number
}

export function ButtonCounter(props: ButtonPropsType) {
    console.log('ButtonCounter rendered')
    return <div className={styles.button_wrapper}>
            <Button
                variant="contained"
                color="primary"
                onClick={props.onClickCallBack}
                disabled={props.disable}
                // className={`${styles.button} ${props.counter === props.maxNumber && props.disable ? styles.red : "" || props.disable ? styles.red : ""}`}
            >{props.name}</Button>
    </div>
}