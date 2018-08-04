import React from "react";
import AccountCommentsCard from "../components/cards/account/AccountCommentsCard";
import AccountCommentsGrowthCard from "../components/cards/account/AccountCommentsGrowthCard";
import AccountFollowersCard from "../components/cards/account/AccountFollowersCard";
import AccountFollowersGrowthCard from "../components/cards/account/AccountFollowersGrowthCard";
import AccountLikesGrowthCard from "../components/cards/account/AccountLikesGrowthCard";
import AccountLikesCard from "../components/cards/account/AccountLikesCard";
import AccountNoPostsCard from "../components/cards/account/AccountNoPostsCard";
import MediaCommentsCard from "../components/cards/media/MediaCommentsCard";
import MediaCard from "../components/cards/media/MediaCard";

const components = [
        {
            component: <MediaCard/>,
            displaySize: 12
        },
        {
            component: <AccountCommentsCard/>,
            displaySize: 4
        },
        {
            component: <AccountCommentsGrowthCard/>,
            displaySize: 4
        },
        {
            component: <AccountFollowersCard/>,
            displaySize: 4
        },
        {
            component: <AccountFollowersGrowthCard/>,
            displaySize: 4
        },
        {
            component: <AccountLikesCard/>,
            displaySize: 4
        },
        {
            component: <AccountLikesGrowthCard/>,
            displaySize: 4
        },
        {
            component: <AccountNoPostsCard/>,
            displaySize: 4
        },
    ]
;

export default components;