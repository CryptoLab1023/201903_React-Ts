import * as React from 'react';
import './style.css';
import {OwnProps} from './interface';

interface State {

}

class CounterComponent extends React.Component<OwnProps, State> {
    public render() {
        return (
            <div>
                this is Counter Component
            </div>
        )
    }
}

export default CounterComponent;