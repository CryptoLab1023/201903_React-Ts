import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { CurrencyPairActions } from '../../actions/CurrencyPairAction'

export interface CurrencyPairState {
    name: string
    pair: string
    price?: string
}

const initialState: CurrencyPairState = {
    name: 'ETH',
    pair: 'BTC',
    price: '1000',
}

export const CurrencyPairReducer = reducerWithInitialState(initialState)
    .case(CurrencyPairActions.changeCurrencyPair, (state, payload) => ({ ...state, name: payload.name, pair: payload.pair }))
