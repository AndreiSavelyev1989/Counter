import React, {ChangeEvent, useCallback} from "react";
import styles from "./CounterSettings.module.css"
import {ButtonCounter} from "../universal_components/ButtonCounter/ButtonCounter";
import {InputCounter} from "../universal_components/InputCounter/InputCounter";

type CounterSettingsPropsType = {
    min: number
    max: number
    startValueChange: (value: number) => void
    maxValueChange: (value: number) => void
    setValueSettings: () => void
}

export const CounterSettings = React.memo((props: CounterSettingsPropsType) => {
    console.log('CounterSettings rendered')
    const onChangeStartCounterValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.startValueChange(+e.currentTarget.value)
    }, [props.startValueChange])
    const onChangeMaxCounterValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueChange(+e.currentTarget.value)
    }, [props.maxValueChange])
    const onClickSetValueSettings = useCallback(() => props.setValueSettings(), [props.setValueSettings])

    return (
        <div className={styles.wrapperCounterSet}>
            <div className={styles.wrapperCounterSetInput}>
                <span>Max value: </span>
                <InputCounter
                    inputType={"number"}
                    onChangeCallBack={onChangeMaxCounterValue}
                    inputValue={props.max}
                    className={props.max < 0 || props.max === props.min ? styles.incorrectValue : ""}
                />

                <span>Start value: </span>
                <InputCounter
                    inputType={"number"}
                    onChangeCallBack={onChangeStartCounterValue}
                    inputValue={props.min}
                    className={props.min < 0 || props.min === props.max || props.min > props.max ? styles.incorrectValue : ""}/>

                <ButtonCounter
                    onClickCallBack={onClickSetValueSettings}
                    name={"set"}
                    disable={props.max === props.min || props.max < props.min || props.max < 0 || props.min < 0}
                />
            </div>
        </div>
    )
})