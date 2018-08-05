import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";
import generalData from "../../testData/generalData"
import mediaData from "../../testData/mediaData"
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
import AccountNoPostsCard from "../cards/account/AccountNoPostsCard";
import AccountTotalPostCard from "../cards/account/AccountTotalPostCard";
import MediaLikesCard from "../cards/media/MediaLikesCard";
import MediaControlCard from "../cards/media/MediaCard";
import MediaLikeChangeCard from "../cards/media/MediaLikeChangeCard";
import AccountTotalLikeCard from "../cards/account/AccountTotalLikeCard";
import MediaMostPopularCard from "../cards/media/MediaMostPopularCard";
import AccountTotalCommentCard from "../cards/account/AccountTotalCommentCard";
import AccountTotalFollowerCard from "../cards/account/AccountTotalFollowerCard";



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
                    <h1>/// No. of published posts ///</h1>
                    <Grid item md={12} xs={12}>
                        <h2>Daily/Weekly/Monthly Trends - NOT DONE! HAVE TO TALK ABOUT BEST OPTIONS!</h2>
                        <AccountNoPostsCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h2>Currrent no. of published posts - NOT DONE</h2>
                        <AccountTotalPostCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h2>Currrent no. of followers - NOT DONE</h2>
                        <AccountTotalFollowerCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h2>Current total no. of likes - NOT DONE</h2>
                        <AccountTotalLikeCard generalData={generalData}/>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <h2>Current total no. of comments - NOT DONE</h2>
                        <AccountTotalCommentCard generalData={generalData}/>
                    </Grid>
                    <h1>/// No. of Likes ///</h1>
                    <Grid item md={12} xs={12}>
                        <h2>Daily/Weekly/Monthly Trends - NOT DONE</h2>
                        <AccountLikesCard generalData={generalData}/>
                        <h2>Per post trends/total - NOT DONE</h2>
                        {mediaData.map((prop, key) => {
                            return (
                                <Grid item xs={12}>
                                    <h2> Post {key + 1} </h2>
                                    <MediaControlCard mediaData={prop}/>
                                </Grid>
                            )
                        })}
                        <h2>Change from post to post</h2>
                        <MediaLikeChangeCard mediaData={mediaData}/>
                    </Grid>
                    <Grid item md = {3} xs={12}>
                        <h2>Most liked post</h2>
                        <MediaMostPopularCard mediaData={mediaData} graph = {"like_count"}/>
                    </Grid>
                    <Grid item md = {3} xs={12}>
                        <h2>Most commented post</h2>
                        <MediaMostPopularCard mediaData={mediaData} graph = {"comments_count"}/>
                    </Grid>
                    <Grid item md = {3} xs={12}>
                        <h2>Most reached post</h2>
                        <MediaMostPopularCard mediaData={mediaData} graph = {"reach_count"}/>
                    </Grid>
                    <Grid item md = {3} xs={12}>
                        <h2>Most impressions post</h2>
                        <MediaMostPopularCard mediaData={mediaData} graph = {"impressions_count"}/>
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

/*
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
                    </Grid>*/

