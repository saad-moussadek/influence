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
import List from "@material-ui/core/es/List/List";
import Link from "react-router-dom/es/Link";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

const styles = theme => ({
    inactive: {
        opacity: "0.7"
    },
    active: {
        opacity: "1",
    },
    typography: {
        fontFamily: "Roboto"
    }
});

class DrawerTabs extends React.Component {
    render() {
        const {classes, theme} = this.props;
        return (
            <List>
                {routes.map((prop, key) => {
                    if (!prop.redirect && !prop.separator) {
                        return (

                            <ListItem button component={NavLink} to={prop.path} className={classes.inactive} activeClassName={classes.active}>
                                <ListItemIcon className={"inherit"}>
                                    {prop.icon()}
                                </ListItemIcon>
                                <ListItemText primary={prop.name}/>
                            </ListItem>


                        );
                    }
                    else return null;
                })}
            </List>
        )
    }
}

DrawerTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(DrawerTabs);
