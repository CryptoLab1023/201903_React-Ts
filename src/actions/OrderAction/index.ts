import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const OrderActions = {
    changePrice: actionCreator<string>('CHANGE_PRICE'),
    changeAmount: actionCreator<string>('CHANGE_AMOUNT'),
    changeTotalAmount: actionCreator<string>('CHANGE_TOTAL_AMOUNT'),
}
