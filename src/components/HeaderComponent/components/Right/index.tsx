import * as React from 'react'
import {NavLink} from "react-router-dom";
import {WithStyles, withStyles} from "@material-ui/core";
import {OwnProps} from "./interface";

const styles = {
    root: {
        display: 'flex',
        marginLeft: 'auto',
    }
};

type Props = OwnProps & WithStyles<typeof styles>

const Right: React.SFC = (props: Props) => {
    return (
        <div className={props.classes.root}>
            {props.items.map((item, index) => (
                <NavLink key={index} to={item.url}>
                    {item.text}
                </NavLink>
            ))}
            {props.children}
        </div>
    );
};

export default withStyles(styles)(Right);