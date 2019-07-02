import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { WithStyles, withStyles } from '@material-ui/core'
import { IOwnProps } from './interface'

const styles = {
    root: {
        display: 'flex',
        marginLeft: 'auto',
    },
}

type IProps = IOwnProps & WithStyles<typeof styles>

const Right: React.SFC = (props: IProps) => {
    return (
        <div className={props.classes.root}>
            {props.items.map((item, index) => (
                <NavLink key={index} to={item.url}>
                    {item.text}
                </NavLink>
            ))}
            {props.children}
        </div>
    )
}

export default withStyles(styles)(Right)
