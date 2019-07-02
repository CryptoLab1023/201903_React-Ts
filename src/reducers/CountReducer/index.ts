import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { CountActions } from '../../actions/CountAction'

export interface CountState {
    count: number
    open: boolean
}

const initialState: CountState = {
    count: 0,
    open: false,
}

export const CountReducer = reducerWithInitialState(initialState)
    .case(CountActions.countChange, (state, payload) => ({ ...state, count: state.count + payload }))
    .case(CountActions.countUp, (state, payload) => ({ ...state, count: state.count + 1 }))
    .case(CountActions.countDown, (state, payload) => ({ ...state, count: state.count - 1 < 0 ? 0 : state.count - 1 }))
    .case(CountActions.openCard, (state, payload) => ({ ...state, open: true }))
    .case(CountActions.closeCard, (state, payload) => ({ ...state, open: false }))
