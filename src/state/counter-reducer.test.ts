import {
    counterReducer,
    CounterType,
    incrementAC,
    resetAC, setStartCounterValueAC,
    setMaxCounterSettingsValueAC,
    setStartCounterSettingsValueAC
} from "./counter-reducer";

let startState: CounterType;
// beforeEach(() => {
//     startState = {
//         counter: 3,
//         startCounterValue: 0,
//         maxCounterValue: 5
//     };
// })

test('increment counter value', () => {
    startState = {
        counter: 0,
        startCounterValue: 0,
        maxCounterValue: 5
    };
    const action = incrementAC(startState.counter + 1);

    const endState = counterReducer(startState, action)

    expect(endState.counter).toBe(1);
    expect(endState.startCounterValue).toBe(0);
    expect(endState.maxCounterValue).toBe(5);
});

test('reset counter value', () => {
    startState = {
        counter: 3,
        startCounterValue: 0,
        maxCounterValue: 5
    };
    const action = resetAC(0);

    const endState = counterReducer(startState, action)

    expect(endState.counter).toBe(0);
    expect(endState.startCounterValue).toBe(0);
    expect(endState.maxCounterValue).toBe(5);
});

test('set start counter value', () => {
    startState = {
        counter: 0,
        startCounterValue: 0,
        maxCounterValue: 5
    };
    const action = setStartCounterSettingsValueAC(4);

    const endState = counterReducer(startState, action)

    expect(endState.startCounterValue).toBe(4);
    expect(endState.counter).toBe(0);
    expect(endState.maxCounterValue).toBe(5);
});

test('set max counter value', () => {
    startState = {
        counter: 0,
        startCounterValue: 0,
        maxCounterValue: 5
    };
    const action = setMaxCounterSettingsValueAC(10);

    const endState = counterReducer(startState, action)

    expect(endState.startCounterValue).toBe(0);
    expect(endState.counter).toBe(0);
    expect(endState.maxCounterValue).toBe(10);
});

test('set counter value', () => {
    startState = {
        counter: 0,
        startCounterValue: 10,
        maxCounterValue: 15
    };
    const action = setStartCounterValueAC(startState.startCounterValue);

    const endState = counterReducer(startState, action)

    expect(endState.startCounterValue).toBe(10);
    expect(endState.counter).toBe(10);
    expect(endState.maxCounterValue).toBe(15);
});