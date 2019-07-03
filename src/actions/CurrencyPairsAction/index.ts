import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export interface ICurrencyPair {
    name: string
    pair: string
}

export const CurrencyPairsActions = {
    addCurrencyPair: actionCreator<ICurrencyPair[]>('ADD_CURRENCY_PAIRS'),
}
