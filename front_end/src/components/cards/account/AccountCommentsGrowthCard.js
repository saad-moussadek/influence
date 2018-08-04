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
import IncreaseIcon from '@material-ui/icons/ArrowDropUp'
import DecreaseIcon from '@material-ui/icons/ArrowDropDown'
import AssistantIcon from '@material-ui/icons/Assistant'
import CommentIcon from '@material-ui/icons/Comment'
import BasicChart from '../../diagrams/BasicChart'
import green from "@material-ui/core/es/colors/green";
import GrowthChart from "../../diagrams/GrowthChart";

const styles = theme => ({
    card: {
        maxWidth: 400,
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

class AccountCommentsGrowthCard extends React.Component {
    render() {
        const {classes, theme, generalData} = this.props;
        let growthGrowth = Math.round(0.1 * (-1000 + (1000 * (generalData[generalData.length - 1].comments_count_growthDerivative / generalData[generalData.length - 2].comments_count_growthDerivative))));
        let avatar;
        let growthIndicator;
        if (growthGrowth > 0) {
            avatar = (
                <Avatar className={classes.avatarGreen}>
                    <CommentIcon/>
                </Avatar>
            );
            growthIndicator = (
                <IncreaseIcon className={classes.increaseGreen}/>
            );
        }
        else {
            avatar = (
                <Avatar className={classes.avatarRed}>
                    <CommentIcon/>
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
                        title={"Comments growth"}
                        subheader={
                            <div>
                                {growthIndicator}{growthGrowth + "%"}
                            </div>
                        }
                    />
                    <GrowthChart data={generalData} graph={"comments_count"}/>
                </Card>
            </div>
        );
    }
}

AccountCommentsGrowthCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    generalData: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AccountCommentsGrowthCard);
