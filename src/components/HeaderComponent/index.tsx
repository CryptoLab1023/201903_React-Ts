import * as React from 'react'
import Left from './components/Left'
import Right from './components/Right'
import { WithStyles, withStyles } from '@material-ui/core'
import { IOwnProps } from './interface'

const styles = {
    root: {
        display: 'flex',
    },
}

type IProps = IOwnProps & WithStyles<typeof styles>

const Header: React.SFC<IProps> = (props: IProps) => {
    return (
        <header className={props.classes.root}>
            <Left>{/*children*/}</Left>
            <Right>{/*children*/}</Right>
        </header>
    )
}

export default withStyles(styles)(Header)
