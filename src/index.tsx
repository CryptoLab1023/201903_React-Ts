import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
import App from './App'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

/* tslint:disable */
if (process.env.NODE_ENV !== 'development') {
    console.log = (): void => {}
    console.info = (): void => {}
    console.warn = (): void => {}
    console.error = (): void => {}
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
)

registerServiceWorker()
