import * as React from 'react';
import './style.css';
import {IOwnProps} from './interface';

interface State {

}

class CounterComponent extends React.Component<IOwnProps, State> {
    public render() {
        return (
            <div>
                this is Counter Component
            </div>
        )
    }
}

export default CounterComponent;