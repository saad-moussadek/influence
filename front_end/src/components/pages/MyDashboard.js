import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import Router from "react-router";
import components from "../../config/componentsList"
import testData from "../../testData/mediaData";
import mediaData from "../../testData/mediaData";
import generalData from "../../testData/generalData";
import userData from "../../testData/userData"
import Grid from "@material-ui/core/es/Grid/Grid";


class MyDashboard extends Component {
    render() {
        return (
            <div>

                <Grid container spacing={24}>

                    {components.map((componentInfo, key) => {
                        if (userData.myDashboard[componentInfo.name])
                            return (
                                <Grid item md={componentInfo.displaySize} xs={12}>
                                    {React.cloneElement(componentInfo.component, {
                                        mediaData: mediaData[0],
                                        generalData: generalData
                                    })}
                                </Grid>
                            )
                    })}

                </Grid>

            </div>
        );
    }
}


export default MyDashboard;
