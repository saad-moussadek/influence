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


export class DrawerTabs extends React.Component {
    render() {
        const {classes, theme} = this.props;
        return (
            <div theme="theme">
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
