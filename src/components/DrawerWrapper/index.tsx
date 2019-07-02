import * as React from 'react'
import classNames from 'classnames'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { IOwnProps } from './interface'
import * as Constant from '../../utils/Constant'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 20,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing.unit * 3,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        link: {
            textDecoration: 'none',
        },
    })

type IProps = IOwnProps & WithStyles<typeof styles>

interface IState {
    open: boolean
}

class PersistentDrawerLeft extends React.PureComponent<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props)
        this.state = { open: false }
    }

    public handleDrawerOpen = () => {
        this.setState({ open: true })
    }

    public handleDrawerClose = () => {
        this.setState({ open: false })
    }

    public render() {
        const { classes, theme } = this.props
        const { open } = this.state

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                    <Toolbar disableGutters={!open}>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, open && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap={true}>
                            {Constant.APP_NAME}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
                    </div>
                    <Divider />
                    <List>
                        {Constant.sideBar.map((element, index) => (
                            <Link key={index} className={classes.link} to={element.link}>
                                <ListItem button={true}>
                                    <ListItemIcon>
                                        <element.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={element.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}>
                    <div className={classes.drawerHeader} />
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft)
