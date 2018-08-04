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

function PostsPaperSheet(props) {
    const { classes, generalData } = props;

    console.log("generalData", generalData);

    return (
        <div>
            <Paper className={classes.root} elevation={13}>
                <Typography variant="headline" component="h3">
                    {generalData[generalData.length - config.prediction - 1].post_count}
                </Typography>
                <Typography component="p">
                    POSTS
                </Typography>
            </Paper>
        </div>
    );
}

PostsPaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsPaperSheet);