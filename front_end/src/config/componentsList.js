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
            name: "MediaCard",
            component: <MediaCard/>,
            displaySize: 12
        },
        {
            name: "AccountCommentsCard",
            component: <AccountCommentsCard/>,
            displaySize: 4
        },
        {
            name: "AccountCommentsGrowthCard",
            component: <AccountCommentsGrowthCard/>,
            displaySize: 4
        },
        {
            name: "AccountFollowersCard",
            component: <AccountFollowersCard/>,
            displaySize: 4
        },
        {
            name: "AccountFollowersGrowthCard",
            component: <AccountFollowersGrowthCard/>,
            displaySize: 4
        },
        {
            name: "AccountLikesCard",
            component: <AccountLikesCard/>,
            displaySize: 4
        },
        {
            name: "AccountLikesGrowthCard",
            component: <AccountLikesGrowthCard/>,
            displaySize: 4
        },
        {
            name: "AccountNoPostsCard",
            component: <AccountNoPostsCard/>,
            displaySize: 4
        },
    ]
;

export default components;