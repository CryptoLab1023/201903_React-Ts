import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { CurrencyPairsActions, ICurrencyPair } from '../../actions/CurrencyPairsAction'

export interface CurrencyPairsState {
    list: ICurrencyPair[]
}

const initialState: CurrencyPairsState = {
    list: [],
}

export const CurrencyPairsReducer = reducerWithInitialState(initialState).case(CurrencyPairsActions.addCurrencyPair, (state, payload) => ({ ...state, list: [...payload] }))
