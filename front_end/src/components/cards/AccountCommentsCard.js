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
import BasicChart from '../diagrams/chartTest'
import green from "@material-ui/core/es/colors/green";

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
});

class AccountCommentsCard extends React.Component {
    render() {
        const {classes, theme, accountData} = this.props;
        const growing = accountData[accountData.length - 1].comments_count > accountData[accountData.length - 2].comments_count;
        let avatar;
        if (growing) avatar = (
            <Avatar className={classes.avatarGreen}>
                <CommentIcon/>
            </Avatar>
        );
        else avatar = (
            <Avatar className={classes.avatarRed}>
                <CommentIcon/>
            </Avatar>
        );

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
                        title="Total Comments"
                        subheader={accountData[accountData.length - 1].comments_count}
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
