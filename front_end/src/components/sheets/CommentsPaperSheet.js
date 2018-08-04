import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function CommentsPaperSheet(props) {
    const { classes, generalData } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="headline" component="h3">
                    {generalData[generalData.length - 1].comments_count}
                </Typography>
                <Typography component="p">
                    COMMENTS
                </Typography>
            </Paper>
        </div>
    );
}

CommentsPaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentsPaperSheet);