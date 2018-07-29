import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/es/Grid/Grid";
import MediaImpressionsCard from "./MediaImpressionsCard";
import MediaLikesCard from "./MediaLikesCard";
import MediaCommentsCard from "./MediaCommentsCard";

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function MediaExpansionPanel(props) {
    const { classes, mediaData } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>See more...</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container spacing={1} className={classes.grid}>
                        <Grid item md={4} xs={12}>
                            <MediaImpressionsCard mediaData={mediaData}/>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <MediaLikesCard mediaData={mediaData}/>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <MediaCommentsCard mediaData={mediaData}/>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

MediaExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    mediaData: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaExpansionPanel);
