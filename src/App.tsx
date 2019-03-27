import * as React from 'react';
import './App.css';
import HomeContainer from './containers/Home'
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Grid>
                    <HomeContainer/>
                </Grid>
            </div>
        );
    }
}

export default App;
