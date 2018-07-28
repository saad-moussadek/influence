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
import CommentIcon from '@material-ui/icons/Comment'
import IncreaseIcon from '@material-ui/icons/ArrowDropUp'
import DecreaseIcon from '@material-ui/icons/ArrowDropDown'
import config from '../../../config/config'
import BasicChart from '../../diagrams/chartTest'
import green from "@material-ui/core/es/colors/green";
import Chip from "@material-ui/core/es/Chip/Chip";

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

class AccountCommentsCard extends React.Component {
    render() {
        const {classes, theme, accountData} = this.props;
        let growth = 0.1 * (-1000 + Math.round(1000 * (accountData[accountData.length - 1].comments_count / accountData[accountData.length - 2].comments_count)));
        let avatar;
        let growthIndicator;
        if (growth > 0) {
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
                        title={accountData[accountData.length - 1].comments_count + " comments"}
                        subheader={
                            <div>
                                {growthIndicator}{growth + "%"}
                            </div>
                        }
                    />
                    <BasicChart data={accountData} graph={"comments_count"} color={theme.colorPrimary}/>
                </Card>
            </div>
        );
    }
}

AccountCommentsCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    accountData: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AccountCommentsCard);
