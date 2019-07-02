import { combineReducers, createStore } from 'redux'
import { CountReducer, CountState } from './reducers/CountReducer'
import { OrderReducer, OrderState } from './reducers/OrderReducer'

export interface AppState {
    counter: CountState
    open: CountState
    order: OrderState
}

const configureStore = () =>
    createStore(
        combineReducers<AppState>({
            open: CountReducer,
            counter: CountReducer,
            order: OrderReducer,
        }),
        {}
    )

const store = configureStore()

export default store
