import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import * as enzyme from 'enzyme'

it('renders without crashing', () => {
    expect(() => {
        enzyme.shallow(<App />)
    }).toThrow()
})

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})
