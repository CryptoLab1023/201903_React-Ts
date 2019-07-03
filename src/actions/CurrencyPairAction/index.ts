import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const CurrencyPairActions = {
    changeCurrencyPair: actionCreator<{name: string, pair: string}>('CHANGE_CURRENCY_PAIR'),
    removeCurrencyPair: actionCreator<void>('REMOVE_CURRENCY_PAIR'),
    updateCurrencyPair: actionCreator<void>('UPDATE_CURRENCY_PAIR'),
}
