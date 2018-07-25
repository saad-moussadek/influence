import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import routes from "../config/routes";
import {NavLink} from "react-router-dom";

export const tabs = (
    <div>
        {routes.map((prop, key) => {
            let fontSize = 10;
            if (!prop.redirect) {
                return (
                    <NavLink to={prop.path} className={'nav-link'}>

                        <ListItem button>
                            <ListItemIcon>
                                {prop.icon()}
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={fontSize} primary={prop.name}/>
                        </ListItem>

                    </NavLink>

                )
            }
            else return null;
        })}
    </div>
);
