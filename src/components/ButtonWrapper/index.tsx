import * as React from 'react'
import {Button, WithStyles, withStyles} from "@material-ui/core";
import classNames from "classnames";
import {IOwnProps} from "./interface";

const styles = () => ({
    button: {
        width: 32.5, height: 32.5,
        padding: 0
    },
});

type IProps = IOwnProps & WithStyles<typeof styles>;

const ButtonWrapper = (props: IProps) => {
    return (
        <Button className={classNames(props.className, props.classes.button)} onClick={() => props.func(props.element)}>
            {props.children}
        </Button>
    );
};

export default withStyles(styles)(ButtonWrapper);