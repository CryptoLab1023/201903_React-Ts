import * as React from 'react'
import {WithStyles, withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {IOwnProps} from "./interface";

const styles = () => ({
    button: {
        width: 32.5, height: 32.5,
        padding: 0
    },
    svgIcon: {
        height: '11px',
        width: '11px',
    },
    icon: {
        fontSize: 40,
        color: '#fffff'
    },
    tooltip: {
        marginLeft: 7
    }
});

type IProps = IOwnProps & WithStyles<typeof styles>

const ChevronLeftIconSample: React.SFC<IProps> = (props: IProps) => {

    const {pageChange, pageId, classes} = props;

    return (
        <IconButton
            onClick={() => pageChange(pageId - 1)}
            color="inherit"
            className={classes.button}
            aria-label="Menu"
        >
            <ChevronLeftIcon
                className={classes.svgIcon}
            />
        </IconButton>)
};

export const ChevronLeftIconWrapper = withStyles(styles)(ChevronLeftIconSample);

const ChevronRightIconSample: React.SFC<IProps> = (props: IProps) => {

    const {pageChange, pageId, classes} = props;

    return (
        <IconButton
            onClick={() => pageChange(pageId + 1)}
            color="inherit"
            className={classes.button}
            aria-label="Menu"
        >
            <ChevronRightIcon
                className={classes.svgIcon}
            />
        </IconButton>
    )
};

export const ChevronRightIconWrapper = withStyles(styles)(ChevronRightIconSample);

