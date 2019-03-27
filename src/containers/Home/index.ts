import {Action} from "typescript-fsa";
import {Dispatch} from 'redux'
import {connect} from 'react-redux'
import {AppState} from '../../store'
import {CountActions} from '../../actions/CountAction'
import HomeComponent from '../../components/HomeComponent'

export interface HomeActions {
    handleUp: () => Action<void>
    handleDown: () => Action<void>
    handleOpen: () => Action<void>
    handleClose: () => Action<void>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleUp: () => dispatch(CountActions.countUp()),
        handleDown: () => dispatch(CountActions.countDown()),
        handleOpen: () => dispatch(CountActions.openCard()),
        handleClose: () => dispatch(CountActions.closeCard())
    }
};

const mapStateToProps = (appState: AppState) => {
    return ({...appState});
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);




