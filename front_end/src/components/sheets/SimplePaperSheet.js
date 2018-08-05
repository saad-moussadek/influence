import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import config from "../../config/config";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/es/colors/green";

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from "@material-ui/core/IconButton";
import AssistantIcon from "@material-ui/icons/Assistant";
import CardHeader from "@material-ui/core/CardHeader";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function displayMessage(data, graph) {
    if (graph === "like_count") {
        if (data[data.length - config.prediction - 1][graph] === 1) {
            return "LIKE";
        } else {
            return "LIKES"
        }
    } else if (graph === "post_count") {
        if (data[data.length - config.prediction - 1][graph] === 1) {
            return "POST";
        } else {
            return "POSTS"
        }
    } else if (graph === "comments_count") {
        if (data[data.length - config.prediction - 1][graph] === 1) {
            return "COMMENT";
        } else {
            return "COMMENTS"
        }
    } else if (graph === "followers_count") {
        if (data[data.length - config.prediction - 1][graph] === 1) {
            return "FOLLOWER";
        } else {
            return "FOLLOWERS"
        }
    }
}

function SimplePaperSheet(props) {
    let {classes, data, graph, color, color2, avatar, growthIndicator, growth, title} = props;

    let str = displayMessage(data, graph);

    if (color == null) color = config.theme.palette.primary[500];
    if (color2 == null) color2 = config.theme.palette.secondary[500];


    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent
                    avatar={avatar}
                    action={
                        <IconButton>
                            <AssistantIcon/>
                        </IconButton>
                    }
                    title={title}
                    subheader={
                        <div>
                            {growthIndicator}{growth}
                        </div>
                    }
                />
            </Card>
        </div>
    );
}

SimplePaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePaperSheet);

/*
<div>
            <Paper className={classes.root} elevation={13}>
                <Typography variant="headline" component="h3" align={"center"}>
                    {data[data.length - config.prediction - 1][graph]}
                </Typography>
            </Paper>
        </div>
 */