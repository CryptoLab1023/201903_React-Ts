import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import * as React from 'react'
import {WithStyles, withStyles, createStyles} from '@material-ui/core'
import {Theme} from '@material-ui/core/styles/createMuiTheme'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import {HomeActions} from "../../containers/Home";
import {hocFactory} from "../../helpers/hocCounter";
import {AppState} from "../../store";
import {OwnProps} from "./interface";

const styles = (theme: Theme) => {
    return createStyles({
        layout: {
            marginTop: 100,
            padding: theme.spacing.unit * 2,
            maxWidth: 1200,
            [theme.breakpoints.up(1200)]: {
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        card: {
            width: 275,
            height: 300,
        }
    })
};

type Props = OwnProps & AppState & HomeActions & WithStyles<typeof styles>

const HomeComponent: React.SFC<Props> = (props: Props) => {

    const {classes} = props;

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography color='inherit'>
                        ヒカクくん
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.layout}>
                <Typography>this is home component</Typography>
                <Button variant={"contained"} color={"primary"} onClick={props.handleOpen}>Open</Button>

                <Grow in={props.counter.open}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography>{props.counter.count}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={props.handleUp}>Count Up</Button>
                            <Button onClick={props.handleDown}>Count Down</Button>
                            <Button variant={"contained"} color={"secondary"} onClick={props.handleClose}>Count
                                Down
                            </Button>
                        </CardActions>
                    </Card>
                </Grow>
            </div>
        </div>
    )
};

export default withStyles(styles)(hocFactory(HomeComponent))