import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import config from "../../config/config";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function displayMessage(data, graph){
    if(graph === "like_count"){
        if(data[data.length - config.prediction - 1][graph] ===1) {
            return "LIKE";
        } else {
            return "LIKES"
        }
    } else if(graph === "post_count"){
        if(data[data.length - config.prediction - 1][graph] ===1) {
            return "POST";
        } else {
            return "POSTS"
        }
    } else if(graph === "comments_count"){
        if(data[data.length - config.prediction - 1][graph] ===1) {
            return "COMMENT";
        } else {
            return "COMMENTS"
        }
    } else if(graph === "followers_count"){
        if(data[data.length - config.prediction - 1][graph] ===1) {
            return "FOLLOWER";
        } else {
            return "FOLLOWERS"
        }
    }
}

function SimplePaperSheet(props) {
    const { classes, data, graph } = props;

    let str = displayMessage(data, graph);



    return (
        <div>
            <Paper className={classes.root} elevation={13}>
                <Typography variant="headline" component="h3">
                    {data[data.length - config.prediction - 1][graph]}
                </Typography>
                <Typography component="p">
                    {str}
                </Typography>
            </Paper>
        </div>
    );
}

SimplePaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePaperSheet);