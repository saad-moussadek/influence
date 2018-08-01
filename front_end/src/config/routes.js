import React from "react";
import MyDashboard from "../components/pages/MyDashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BubbleIcon from "@material-ui/icons/BubbleChart";
import TimelineIcon from "@material-ui/icons/Timeline";
import BackupIcon from "@material-ui/icons/Backup";
import PeopleIcon from "@material-ui/icons/People";
import GeneralIcon from "@material-ui/icons/DataUsage";
import TestIcon from "@material-ui/icons/DirectionsRun";
import Indices from "../components/pages/Indices";
import General from "../components/pages/General";
import Audience from "../components/pages/Audience";
import Media from "../components/pages/Media";
import Estimates from "../components/pages/Estimates";
import SaadTest from "../components/pages/SaadTest";
import AlexTest from "../components/pages/AlexTest";


const routes = [
    {
        path: "/myDashboard",
        name: "My Dashboard",
        icon: () => {return (<DashboardIcon/>)},
        component: MyDashboard,
    },
    {
        path: "/general",
        name: "General",
        icon: () => {return (<GeneralIcon/>)},
        component: General,
    },
    {
        path: "/indices",
        name: "Indices",
        icon: () => {return (<BubbleIcon/>)},
        component: Indices,
    },
    {
        path: "/media",
        name: "Media",
        icon: () => {return (<BackupIcon/>)},
        component: Media,
    },
    {
        path: "/audience",
        name: "Audience",
        icon: () => {return (<PeopleIcon/>)},
        component: Audience,
    },
    {
        path: "/estimates",
        name: "Estimates",
        icon: () => {return (<TimelineIcon/>)},
        component: Estimates,
    },
    {
        path: "/saadtest",
        name: "Saad Test",
        icon: () => {return (<TestIcon/>)},
        component: SaadTest,
    },
    {
        path: "/alextest",
        name: "Alex Test",
        icon: () => {return (<TestIcon/>)},
        component: AlexTest,
    },
    {
        redirect: true,
        path: "/",
        to: "/myDashboard",
        name: "My Dashboard"
    },
];

export default routes;