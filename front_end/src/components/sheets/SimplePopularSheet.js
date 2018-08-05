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

function SimplePopularSheet(props) {
    const { classes, maxLikes, message } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={13}>
                <Typography variant="headline" component="h3">
                    {maxLikes}
                </Typography>
                <Typography component="p">
                    {message}
                </Typography>
            </Paper>
        </div>
    );
}

SimplePopularSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopularSheet);