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
    .case(OrderActions.changePrice, (state, payload) => {
        const price = convertNumberStr(payload)
        return { ...state, price, totalAmount: calculateTotalAmount(price, state.amount) }
    })
    .case(OrderActions.changeAmount, (state, payload) => {
        const amount = convertNumberStr(payload)
        return { ...state, amount, totalAmount: calculateTotalAmount(state.price, amount) }
    })
    .case(OrderActions.changeTotalAmount, (state, payload) => {
        const totalAmount = convertNumberStr(payload)
        return { ...state, totalAmount, amount: calculateAmount(state.price, totalAmount) }
    })

const convertNumberStr = (numberStr: string, digit: number = 8): string => {
    if (!numberStr) return ''
    if (numberStr.lastIndexOf('.') === -1) return parseFloat(numberStr).toString()
    const NumberUpperDot = numberStr.split('.')[0]
    let NumberUnderDot = numberStr.split('.')[1]
    if (NumberUnderDot.length > digit) NumberUnderDot = NumberUnderDot.slice(0, digit)
    return NumberUpperDot + '.' + NumberUnderDot
}

const calculateTotalAmount = (price: string, amount: string, digit: number = 8): string => {
    if (!price || !amount) return ''
    return (Number(price) * Number(amount)).toFixed(digit)
}

const calculateAmount = (price: string, totalAmount: string, digit: number = 8): string => {
    if (!price || !totalAmount) return ''
    return (Number(totalAmount) / Number(price)).toFixed(digit)
}
