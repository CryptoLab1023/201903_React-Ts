import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './containers/Home'
import DrawerWrapper from './components/DrawerWrapper'

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <DrawerWrapper>
                    <Switch>
                        <Route path={'/'} exact={true} component={HomeContainer} />
                    </Switch>
                </DrawerWrapper>
            </div>
        )
    }
}

export default App
