import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AssistantIcon from '@material-ui/icons/Assistant'
import ImpressionIcon from '@material-ui/icons/RemoveRedEye'
import IncreaseIcon from '@material-ui/icons/ArrowDropUp'
import DecreaseIcon from '@material-ui/icons/ArrowDropDown'
import config from '../../../config/config'
import BasicChart from '../../diagrams/BasicChart'
import green from "@material-ui/core/es/colors/green";
import Chip from "@material-ui/core/es/Chip/Chip";

const styles = theme => ({
    card: {
        maxWidth: 400,
        borderRadius: 0
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatarRed: {
        backgroundColor: red[500],
    },
    avatarGreen: {
        backgroundColor: green[500],
    },
    increaseGreen: {
        color: "green",
    },
    decreaseRed: {
        color: "red",
    },
});

class MediaImpressionsCard extends React.Component {
    render() {
        const {classes, theme, mediaData} = this.props;
        let growth = 0.1 * (-1000 + Math.round(1000 * (mediaData.data[mediaData.data.length - 1].impressions_count / mediaData.data[mediaData.data.length - 2].impressions_count)));
        let avatar;
        let growthIndicator;
        if (growth > 0) {
            avatar = (
                <Avatar className={classes.avatarGreen}>
                    <ImpressionIcon/>
                </Avatar>
            );
            growthIndicator = (
                <IncreaseIcon className={classes.increaseGreen}/>
            );
        }
        else {
            avatar = (
                <Avatar className={classes.avatarRed}>
                    <ImpressionIcon/>
                </Avatar>
            );
            growthIndicator = (
                <DecreaseIcon className={classes.decreaseRed}/>
            );
        }

        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={avatar}
                        action={
                            <IconButton>
                                <AssistantIcon/>
                            </IconButton>
                        }
                        title={mediaData.data[mediaData.data.length - 1].impressions_count + " impressions"}
                        subheader={
                            <div>
                                {growthIndicator}{growth + "%"}
                            </div>
                        }
                    />
                    <BasicChart data={mediaData.data} graph={"impressions_count"} graph2={"reach_count"} color={theme.colorPrimary} color2={theme.colorSecondary}/>
                </Card>
            </div>
        );
    }
}

MediaImpressionsCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    mediaData: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MediaImpressionsCard);
