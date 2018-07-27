import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import AppIcon from '@material-ui/icons/InsertChartOutlined';
import config from '../config/config'

import { DrawerTabs } from './DrawerTabs';
import App from "../App";
import Route from "react-router/es/Route";
import Router from "react-router/es/Router";
import MyDashboard from "./pages/MyDashboard";
import {HashRouter, Redirect, Switch} from "react-router-dom";
import routes from "../config/routes";

const drawerWidth = 300;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        // [theme.breakpoints.up('md')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        // },
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class Root extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <DrawerTabs classes={classes} theme={theme}/>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Hidden smDown>
                            <AppIcon className={classes.icon} />
                        </Hidden>

                        <Typography variant="title" color="inherit" noWrap>
                            {config.appTitle}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <HashRouter>
                        <Switch>
                            {routes.map((prop, key) => {
                                if (prop.redirect)
                                    return <Redirect from={prop.path} to={prop.to} />
                                else
                                    return <Route from={prop.path} component={prop.component} />
                            })}
                        </Switch>
                    </HashRouter>

                </main>
            </div>
        );
    }
}

Root.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Root);
