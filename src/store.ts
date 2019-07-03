import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { CountReducer, CountState } from './reducers/CountReducer'
import { OrderReducer, OrderState } from './reducers/OrderReducer'
import { CurrencyPairReducer, CurrencyPairState } from './reducers/CurrencyPairReducer'
import { CurrencyPairsReducer, CurrencyPairsState } from './reducers/CurrencyPairs'

export interface AppState {
    counter: CountState
    order: OrderState
    selectedCurrencyPair: CurrencyPairState
    currencyPairs: CurrencyPairsState
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () =>
    createStore(
        combineReducers<AppState>({
            counter: CountReducer,
            order: OrderReducer,
            selectedCurrencyPair: CurrencyPairReducer,
            currencyPairs: CurrencyPairsReducer,
        }),
        composeEnhancers(
            applyMiddleware(
                thunk,
                createLogger({
                    diff: true,
                    collapsed: true,
                })
            )
        )
    )

const store = configureStore()

export default store
