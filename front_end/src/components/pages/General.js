import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";
import accountData from "../../testData/generalData"
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import withTheme from "@material-ui/core/es/styles/withTheme";
import AccountFollowersCard from "../cards/AccountFollowersCard";
import AccountLikesCard from "../cards/AccountLikesCard";
import AccountCommentsCard from "../cards/AccountCommentsCard";

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

class General extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item md={4} xs={12}>
                        <AccountFollowersCard accountData={accountData}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <AccountLikesCard accountData={accountData}/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <AccountCommentsCard accountData={accountData}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(General);
