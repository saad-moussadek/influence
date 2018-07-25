import React from "react";
import MyDashboard from "../components/pages/myDashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BubbleIcon from "@material-ui/icons/BubbleChart";
import Indices from "../components/pages/Indices";


const routes = [
    {
        path: "/myDashboard",
        name: "My Dashboard",
        icon: () => {return (<DashboardIcon/>)},
        component: MyDashboard,
    },
    {
        path: "/indices",
        name: "Indices",
        icon: () => {return (<BubbleIcon/>)},
        component: Indices,
    },
    {
        redirect: true,
        path: "/",
        to: "/myDashboard",
        name: "My Dashboard"
    },
];

export default routes;