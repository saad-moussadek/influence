import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";
import generalData from "../../testData/generalData"
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import withTheme from "@material-ui/core/es/styles/withTheme";
import AccountFollowersCard from "../cards/account/AccountFollowersCard";
import AccountLikesCard from "../cards/account/AccountLikesCard";
import AccountCommentsCard from "../cards/account/AccountCommentsCard";
import AccountLikesGrowthCard from "../cards/account/AccountLikesGrowthCard";
import AccountFollowersGrowthCard from "../cards/account/AccountFollowersGrowthCard";
import AccountCommentsGrowthCard from "../cards/account/AccountCommentsGrowthCard";
import AccountLikesPerPostLineBar from "../cards/account/AccountLikesPerPostLineBar";
import AccountNoPostsCard from "../cards/account/AccountNoPostsCard";


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

class AlexTest extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    No. of published posts
                    <Grid item md={12} xs={12}>
                        Daily/Weekly/Monthly Trends - NOT DONE! HAVE TO TALK ABOUT BEST OPTIONS!
                        <AccountNoPostsCard generalData={generalData}/>
                        Currrent no. of published posts - NOT DONE
                        {/*<Avatar src={10}></Avatar>*/}
                    </Grid>
                    No. of Likes
                    <Grid item md={12} xs={12}>
                        Daily/Weekly/Monthly Trends - NOT DONE
                        Current total no. of likts - NOT DONE
                        Per post trends/total
                        <AccountLikesPerPostLineBar generalData={generalData}/>
                        Currrent no. of published posts - NOT DONE
                        {/*<Avatar src={10}></Avatar>*/}
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <AccountLikesCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <AccountCommentsCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <AccountFollowersGrowthCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <AccountLikesGrowthCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <AccountCommentsGrowthCard generalData={generalData}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

AlexTest.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AlexTest);

