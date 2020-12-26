import React, {ChangeEvent} from "react";

type InputCounterPropsType = {
    inputType: any
    onChangeCallBack: (value: ChangeEvent<HTMLInputElement>) => void
    inputValue: number
    className: any
}

export function InputCounter(props: InputCounterPropsType) {
    console.log('InputCounter rendered')
    return (
        <input
            type={props.inputType}
            onChange={props.onChangeCallBack}
            value={props.inputValue}
            className={props.className}
        />
    )
}