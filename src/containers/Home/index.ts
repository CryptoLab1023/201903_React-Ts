import { Action } from 'typescript-fsa'
import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { CountActions } from '../../actions/CountAction'
import { OrderActions } from '../../actions/OrderAction'
import HomeComponent from '../../components/HomeComponent'

export interface HomeActions {
    handleCount: (amount: number) => Action<void>
    handleUp: () => Action<void>
    handleDown: () => Action<void>
    handleOpen: () => Action<void>
    handleClose: () => Action<void>
    changePrice: (price: string) => Action<void>
    changeAmount: (amount: string) => Action<void>
    changeTotalAmount: (totalAmount: string) => Action<void>
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            handleCount: CountActions.countChange,
            handleUp: CountActions.countUp,
            handleDown: CountActions.countDown,
            handleOpen: CountActions.openCard,
            handleClose: CountActions.closeCard,
            changePrice: OrderActions.changePrice,
            changeAmount: OrderActions.changeAmount,
            changeTotalAmount: OrderActions.changeTotalAmount,
        },
        dispatch
    )

const mapStateToProps = (appState: AppState) => ({ ...appState })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)
