import React, { Component } from 'react';
import MediaControlCard from "../cards/media"
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";

class Media extends Component {
    render() {
        return (
            <div>
                <MediaControlCard />
            </div>
        );
    }
}


export default Media;
