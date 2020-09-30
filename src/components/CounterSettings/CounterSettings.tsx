import React, {ChangeEvent} from "react";
import styles from "./CounterSettings.module.css"
import {ButtonCounter} from "../ButtonCounter/ButtonCounter";

type CounterSettingsPropsType = {
    min: number
    max: number
    startValueChange: (value: number) => void
    maxValueChange: (value: number) => void
    setValueSettings: () => void
}

export function CounterSettings(props: CounterSettingsPropsType) {

    const onChangeStartCounterValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueChange(+e.currentTarget.value)
    }
    const onChangeMaxCounterValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueChange(+e.currentTarget.value)
    }
    const onClickSetValueSettings = () => props.setValueSettings()

    return (
        <div className={styles.wrapperCounterSet}>
            <div className={styles.wrapperCounterSetInput}>
                <span>Max value: </span><input
                type="number"
                onChange={onChangeMaxCounterValue}
                value={props.max}
                className={props.max < 0 || props.max === props.min ? styles.incorrectValue : ""}
            />

                <span>Start value: </span><input
                type="number"
                onChange={onChangeStartCounterValue}
                value={props.min}
                className={props.min < 0 || props.min === props.max ? styles.incorrectValue : ""}
            />
                <ButtonCounter
                    onClickCallBack={onClickSetValueSettings}
                    name={"set"}
                    disable={props.max === props.min || props.max < props.min || props.max < 0 || props.min < 0}
                />
            </div>
        </div>
    )
}