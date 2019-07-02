import * as React from 'react'
import { lifecycle } from 'recompose'

export const hocFactory = (component: React.SFC) =>
    lifecycle({
        componentDidMount(): void {
            console.log('componentDidMount - hocFactory')
        },
        componentWillMount(): void {
            console.log('componentWillMount - hocFactory')
        },
        componentWillReceiveProps(): void {
            console.log('componentWillReceiveProps - hocFactory')
        },
        shouldComponentUpdate(): boolean {
            console.log('shouldComponentUpdate - hocFactory')
            return true
        },
    })(component)
