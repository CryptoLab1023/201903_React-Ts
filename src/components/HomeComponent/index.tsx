import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import * as React from 'react'
import { WithStyles, withStyles, createStyles, Input, FormControl, InputLabel } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grow from '@material-ui/core/Grow'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import { HomeActions } from '../../containers/Home'
import { hocFactory } from '../../helpers/hocCounter'
import { AppState } from '../../store'
import { IOwnProps } from './interface'
import { submitOrder } from '../../utils/Order'

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
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        formControl: {
            margin: theme.spacing.unit,
        },
    })
}

type IProps = IOwnProps & AppState & HomeActions & WithStyles<typeof styles>

const HomeComponent: React.FC<IProps> = (props: IProps) => {
    const { classes, counter, order, handleOpen, handleUp, handleDown, handleCount, handleClose, changePrice, changeAmount, changeTotalAmount } = props

    return (
        <div>
            <div className={classes.layout}>
                <Typography variant="subtitle1">this is home component</Typography>
                <Button variant={'contained'} color={'primary'} onClick={handleOpen}>
                    Open
                </Button>
                <Grid>
                    <Grow in={counter.open}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography>{counter.count}</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid>
                                    <Button color="primary" variant="outlined" onClick={handleUp}>
                                        Count Up
                                    </Button>
                                    <Button color="primary" variant="outlined" onClick={handleDown}>
                                        Count Down
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        onClick={e => {
                                            e.preventDefault()
                                            handleCount(5)
                                        }}>
                                        Count 5 Up
                                    </Button>
                                </Grid>
                                <Grid>
                                    <Button variant={'contained'} color={'secondary'} onClick={handleClose}>
                                        Close
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grow>
                </Grid>
                <Grid>
                    <Grow in={counter.open}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="title">Order Form</Typography>
                            </CardContent>
                            <CardActions>
                                <Grid>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel>Price</InputLabel>
                                        <Input
                                            value={order.price}
                                            autoFocus={true}
                                            onChange={e => {
                                                e.preventDefault()
                                                changePrice(e.target.value)
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel>Amount</InputLabel>
                                        <Input
                                            value={order.amount}
                                            onChange={e => {
                                                e.preventDefault()
                                                changeAmount(e.target.value)
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel>Total</InputLabel>
                                        <Input
                                            value={order.totalAmount}
                                            onChange={e => {
                                                e.preventDefault()
                                                changeTotalAmount(e.target.value)
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <Button variant={"contained"} color="primary" onClick={ev => submitOrder(order.price, order.amount, order.totalAmount)}>Submit</Button>
                                    </FormControl>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grow>
                </Grid>
            </div>
        </div>
    )
}

export default withStyles(styles)(hocFactory(HomeComponent))
