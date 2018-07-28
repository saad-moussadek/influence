import React, {Component} from 'react';
import MediaControlCard from "../cards/media/MediaCard"
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";
import testData from "../../testData/mediaData"
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import withTheme from "@material-ui/core/es/styles/withTheme";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Media extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {testData.map((prop, key) => {
                        return (
                            <Grid item xs={12}>
                                <MediaControlCard media={prop}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

Media.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Media);
