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
import ThumbsUpIcon from '@material-ui/icons/ThumbUp'
import IncreaseIcon from '@material-ui/icons/ArrowDropUp'
import DecreaseIcon from '@material-ui/icons/ArrowDropDown'
import config from '../../../config/config'
import BasicChart from '../../diagrams/BasicChart'
import green from "@material-ui/core/es/colors/green";
import Chip from "@material-ui/core/es/Chip/Chip";
import addRegression from "../../diagrams/RegressionTools";
import SimplePopularPaperSheet from "../../sheets/SimplePopularSheet";

const styles = theme => ({
    card: {
        // maxWidth: 400,
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

function displayMessage(maxLikes, graph){
    if(graph === "like_count"){
        if(maxLikes ===1) {
            return "LIKE";
        } else {
            return "LIKES"
        }
    } else if(graph === "comments_count"){
        if(maxLikes ===1) {
            return "COMMENT";
        } else {
            return "COMMENTS"
        }
    } else if(graph === "reach_count"){
        if(maxLikes ===1) {
            return "REACH";
        } else {
            return "REACHES"
        }
    } else if(graph === "impressions_count"){
        if(maxLikes ===1) {
            return "IMPRESSION";
        } else {
            return "IMPRESSIONS"
        }
    }
}

class MediaMostPopularCard extends React.Component {
    render() {
        const {classes, theme, mediaData, graph} = this.props;
        console.log("mediaDataaa", graph);

        let key;
        let maxLikes = -1;
        let maxIndex;
        let obj;

        for(key = 0; key < mediaData.length; key ++){
            if(maxLikes < mediaData[key].data[mediaData[key].data.length - config.prediction - 1][graph]){
                maxLikes = mediaData[key].data[mediaData[key].data.length - config.prediction - 1][graph];
                obj = mediaData[key].imageURL;
                maxIndex = key;
            }
            console.log("Major Key", key);
        }

        let growth = 0.1 * (-1000 + Math.round(1000 * (mediaData[maxIndex].data[mediaData[maxIndex].data.length - 1 - config.prediction][graph] / mediaData[maxIndex].data[mediaData[maxIndex].data.length - 2 - config.prediction][graph])));
        let avatar;
        let growthIndicator;
        if (growth > 0) {
            avatar = (
                <Avatar className={classes.avatarGreen}>
                    <ThumbsUpIcon/>
                </Avatar>
            );
            growthIndicator = (
                <IncreaseIcon className={classes.increaseGreen}/>
            );
        }
        else {
            avatar = (
                <Avatar className={classes.avatarRed}>
                    <ThumbsUpIcon/>
                </Avatar>
            );
            growthIndicator = (
                <DecreaseIcon className={classes.decreaseRed}/>
            );
        }

        let str = displayMessage(maxLikes, graph);

        return (
            <div>
                <Card className={classes.card}
                      image={mediaData.imageURL}
                      title="Live from space album cover">
                    <CardHeader
                        avatar={avatar}
                        action={
                            <IconButton>
                                <AssistantIcon/>
                            </IconButton>
                        }
                        title={mediaData[maxIndex].data[mediaData[maxIndex].data.length - 1 - config.prediction][graph] + " " + str}
                        subheader={
                            <div>
                                {growthIndicator}{growth + "%"}
                            </div>
                        }
                    />
                    <SimplePopularPaperSheet maxLikes={maxLikes} message={str} color={theme.colorPrimary}/>
                </Card>
            </div>
        );
    }
}

MediaMostPopularCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    mediaData: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MediaMostPopularCard);
