export type CounterType = {
    counter: number
    startCounterValue: number
    maxCounterValue: number
}

const initialState: CounterType = {
    counter: 0,
    startCounterValue: 0,
    maxCounterValue: 5,
}

export const counterReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INCREMENT-COUNTER_VALUE":
            return {...state, counter: action.value}
        case "RESET-COUNTER_VALUE":
            return {...state, counter: action.value}
        case "SET-START-COUNTER-SETTINGS-VALUE":
            return {...state, startCounterValue: action.value}
        case "SET-MAX-COUNTER-SETTINGS-VALUE":
            return {...state, maxCounterValue: action.value}
        case "SET-START-COUNTER-VALUE":
            return {...state, counter: action.value}
        default:
            return state
    }
}
type ActionsType =
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setStartCounterSettingsValueAC>
    | ReturnType<typeof setMaxCounterSettingsValueAC>
    | ReturnType<typeof setStartCounterValueAC>

export const incrementAC = (value: number) => ({type: 'INCREMENT-COUNTER_VALUE', value} as const)
export const resetAC = (value: number) => ({type: 'RESET-COUNTER_VALUE', value} as const)
export const setStartCounterSettingsValueAC = (value: number) => ({type: 'SET-START-COUNTER-SETTINGS-VALUE', value} as const)
export const setMaxCounterSettingsValueAC = (value: number) => ({type: 'SET-MAX-COUNTER-SETTINGS-VALUE', value} as const)
export const setStartCounterValueAC = (value: number) => ({type: 'SET-START-COUNTER-VALUE', value} as const)