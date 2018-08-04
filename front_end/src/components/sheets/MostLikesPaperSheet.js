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

function MostLikesPaperSheet(props) {
    const { classes, mediaData } = props;
    let key;
    let maxLikes = -1;
    let maxIndex;
    let obj;
    for(key = 0; key < mediaData.length; key ++){
        if(maxLikes < mediaData[key].data[mediaData[key].data.length - 1].like_count){
            maxLikes = mediaData[key].data[mediaData[key].data.length - 1].like_count;
            obj = mediaData[key].imageURL;
            maxIndex = key;
        }
        console.log(mediaData[key].data[mediaData[key].data.length - 1].like_count);
    }

    return (
        <div>
            <Paper className={classes.root} elevation={13}>
                <Typography variant="headline" component="h3">
                    {maxLikes}
                </Typography>
                <Typography component="p">
                    LIKES
                </Typography>
            </Paper>
        </div>
    );
}

MostLikesPaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MostLikesPaperSheet);