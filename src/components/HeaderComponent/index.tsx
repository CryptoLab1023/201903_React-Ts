import * as React from 'react'
import Left from './components/Left';
import Right from './components/Right';
import {WithStyles, withStyles} from "@material-ui/core";
import {OwnProps} from "./interface";

const styles = {
    root: {
        display: 'flex',
    }
};

type Props = OwnProps & WithStyles<typeof styles>

const Header: React.SFC<Props> = (props: Props) => {
    return (
        <header className={props.classes.root}>
            <Left>
                {/*children*/}
            </Left>
            <Right>
                {/*children*/}
            </Right>
        </header>
    );
};

export default withStyles(styles)(Header);