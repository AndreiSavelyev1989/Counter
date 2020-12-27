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
            return {...state, counter: action.counter}
        case "RESET-COUNTER_VALUE":
            return {...state, counter: action.counter}
        case "SET-START-COUNTER-VALUE":
            return {...state, startCounterValue: action.value}
        case "SET-MAX-COUNTER-VALUE":
            return {...state, maxCounterValue: action.value}
        case "SET-COUNTER":
            return {...state, counter: action.value}
        default:
            return state
    }
}
type ActionsType =
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setStartCounterValueAC>
    | ReturnType<typeof setMaxCounterValueAC>
    | ReturnType<typeof setCounterAC>

export const incrementAC = (counter: number) => ({type: 'INCREMENT-COUNTER_VALUE', counter} as const)
export const resetAC = (counter: number) => ({type: 'RESET-COUNTER_VALUE', counter} as const)
export const setStartCounterValueAC = (value: number) => ({type: 'SET-START-COUNTER-VALUE', value} as const)
export const setMaxCounterValueAC = (value: number) => ({type: 'SET-MAX-COUNTER-VALUE', value} as const)
export const setCounterAC = (value: number) => ({type: 'SET-COUNTER', value} as const)