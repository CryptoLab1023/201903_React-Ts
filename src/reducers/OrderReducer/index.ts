import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { OrderActions } from '../../actions/OrderAction'
// import * as Enumerable from 'linq'

export interface OrderState {
    price: string
    amount: string
    totalAmount: string
}

const initialState: OrderState = {
    price: '0',
    amount: '0',
    totalAmount: '0',
}

export const OrderReducer = reducerWithInitialState(initialState)
    .case(OrderActions.changePrice, (state, payload) => ({ ...state, price: payload }))
    .case(OrderActions.changeAmount, (state, payload) => ({ ...state, amount: payload }))
    .case(OrderActions.changeTotalAmount, (state, payload) => ({ ...state, totalAmount: payload }))