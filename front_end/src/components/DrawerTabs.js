import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import routes from "../config/routes";
import {NavLink} from "react-router-dom";
import Divider from "@material-ui/core/es/Divider/Divider";
import {withStyles} from "@material-ui/core/styles/index";

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

class DrawerTabs extends React.Component {
    render() {
        const {classes, theme} = this.props;
        return (
            <div>
                {routes.map((prop, key) => {
                    let fontSize = 10;
                    if (!prop.redirect && !prop.separator) {
                        return (
                            <NavLink to={prop.path} className={'nav-link'}>

                                <ListItem button>
                                    <ListItemIcon>
                                        {prop.icon()}
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={fontSize} primary={prop.name}/>
                                </ListItem>

                            </NavLink>
                        );
                    }
                    else return null;
                })}
            </div>
        )
    }
}

DrawerTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerTabs);
