import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const CountActions = {
    countUp: actionCreator<void>('COUNT_UP'),
    countDown: actionCreator<void>('COUNT_DOWN'),
    openCard: actionCreator<void>('OPEN_CARD'),
    closeCard: actionCreator<void>('CLOSE_CARD'),
    countChange: actionCreator<number>('COUNT_CHANGE'),
}
