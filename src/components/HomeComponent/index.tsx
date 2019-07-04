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
import { hocFactory } from '../../helpers/hocHome'
import { AppState } from '../../store'
import { IOwnProps } from './interface'
import { IHoc } from '../../helpers/hocHome'

const styles = (theme: Theme) => {
    return createStyles({
        layout: {
            marginTop: 100,
            padding: theme.spacing.unit * 2,
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        card: {
            width: '100%',
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

type IProps = IHoc & IOwnProps & AppState & HomeActions & WithStyles<typeof styles>

const HomeComponent: React.FC<IProps> = (props: IProps) => {
    const [orderType, switchOrderType] = React.useState<number>(0)
    React.useEffect(() => {
        console.log('changed: orderType to ' + orderType)
    }, [orderType])

    const double = React.useMemo<number>(() => {
        return orderType * 2
    }, [orderType])

    const doubleWithUnit = React.useMemo(() => `${double} pt`, [double])

    const handleClick = React.useCallback((ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
        ev.preventDefault()
        switchOrderType(prev => prev + 1)
    }, [])

    const {
        classes,
        counter,
        order,
        currencyPairs,
        selectedCurrencyPair,
        handleOpen,
        handleUp,
        handleDown,
        handleCount,
        handleClose,
        changePrice,
        changeAmount,
        changeTotalAmount,
        websocketProvider,
    } = props

    return (
        <div>
            <div className={classes.layout}>
                <Typography variant="subtitle1">this is home component</Typography>
                <Button variant={'contained'} color={'primary'} onClick={handleOpen}>
                    Open
                </Button>
                <Button variant={'contained'} color={'secondary'} onClick={handleClose}>
                    Close
                </Button>
                <Grid container={true} justify="center" spacing={8}>
                    <Grid item={true} xs={12} sm={6} lg={4}>
                        <Grow in={counter.open}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant={'subtitle1'}>React + Redux Count up</Typography>
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
                                </CardActions>
                            </Card>
                        </Grow>
                    </Grid>
                    <Grid item={true} xs={12} sm={6} lg={4}>
                        <Grow in={counter.open}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant={'subtitle1'}>React useState, useCallback, useMemo, useEffect</Typography>
                                    <Typography>orderType: {orderType}</Typography>
                                    <Typography>double: {double}</Typography>
                                    <Typography>doubleWithUnit: {doubleWithUnit}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid>
                                        <Button variant="outlined" color={"primary"} onClick={handleClick}>Change State</Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grow>
                    </Grid>
                    <Grid item={true} xs={12} sm={6} lg={4}>
                        <Grow in={counter.open}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="subtitle1">Typescript Exchange Order Form</Typography>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel>Price</InputLabel>
                                        <Button
                                            variant={'contained'}
                                            color={'primary'}
                                            onClick={e => {
                                                e.preventDefault()
                                                switchOrderType(orderType === 1 ? 0 : 1)
                                            }}>
                                            Switch to {orderType === 0 ? 'limit' : 'market'}
                                        </Button>
                                    </FormControl>
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
                                </CardContent>
                                <CardActions>
                                    <Grid>
                                        <FormControl className={classes.formControl}>
                                            <Button
                                                variant={'contained'}
                                                color="primary"
                                                onClick={(ev: React.MouseEvent<HTMLElement, MouseEvent>) => {
                                                    ev.preventDefault()
                                                    const { price, amount, totalAmount } = order
                                                    websocketProvider.send('exchange', orderType === 0 ? 'limitOrder' : 'marketOrder', {
                                                        price: orderType === 0 ? price : selectedCurrencyPair.price,
                                                        amount,
                                                        totalAmount,
                                                    })
                                                }}>
                                                Submit
                                            </Button>
                                        </FormControl>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grow>
                    </Grid>
                    <Grid item={true} xs={12} sm={6} lg={4}>
                        <Grow in={counter.open}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="subtitle1">Currency Pairs from BEXAM Core</Typography>
                                    {currencyPairs.list.map((currencyPair, index) => (
                                        <Typography key={index} variant="body1">
                                            {currencyPair.name} / {currencyPair.pair}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grow>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default withStyles(styles)(hocFactory(HomeComponent))
