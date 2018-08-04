import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";
import generalData from "../../testData/generalData";
import mediaData from "../../testData/mediaData";
import addRegression from "../diagrams/RegressionTools"
import BasicChart from "../diagrams/BasicChart";


class SaadTest extends Component {
    render() {

        addRegression(generalData, "like_count", 5);

        console.log(generalData)

        return (
            <div>
                <BasicChart data={generalData} graph={"like_count"} graph2={"like_count_regression"}/>
            </div>
        );
    }
}


export default SaadTest;
