import {combineReducers, createStore} from "redux";
import {CountReducer, CountState} from "./reducers/CountReducer";
import {AppState} from "./store";

export interface AppState {
    counter: CountState
    open: CountState
}

const configureStore = () =>
    createStore(
        combineReducers<AppState>({
            open: CountReducer,
            counter: CountReducer,
        }),
        {},
    );

const store = configureStore();

export default store;

