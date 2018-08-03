import React from "react";
import LineChart from "recharts/es6/chart/LineChart";
import Line from "recharts/es6/cartesian/Line";
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import AreaChart from "recharts/es6/chart/AreaChart";
import XAxis from "recharts/es6/cartesian/XAxis";
import YAxis from "recharts/es6/cartesian/YAxis";
import CartesianGrid from "recharts/es6/cartesian/CartesianGrid";
import Tooltip from "recharts/es6/component/Tooltip";
import ReferenceLine from "recharts/es6/cartesian/ReferenceLine";
import Area from "recharts/es6/cartesian/Area";
import Legend from "recharts/es6/component/Legend";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles/index";
import withTheme from "@material-ui/core/es/styles/withTheme";
import BarChart from "recharts/es6/chart/BarChart";
import Bar from "recharts/es6/cartesian/Bar";
import config from "../../config/config";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import ShowChart from "@material-ui/icons/es/ShowChart";
import BarChartIcon from "@material-ui/icons/BarChart";

const styles = theme => ({
    button: {
        marginTop: 0,
        marginLeft: 2 * theme.spacing.unit,
        display: "flex",
        position: "absolute",
        zIndex: 10,
    },
});


class BasicChart extends React.Component {
    state = {
        lineChartVisibility: "visible",
        lineChartShrink: 200,

        barChartVisibility: "hidden",
        barChartShrink: 0,
    };

    onClickSwitch = () => {
        if (this.state.lineChartVisibility == "visible") {
            this.setState({
                lineChartVisibility: "hidden",
                lineChartShrink: 0,

                barChartVisibility: "visible",
                barChartShrink: 200,
            })
        }
        else {
            this.setState({
                lineChartVisibility: "visible",
                lineChartShrink: 200,

                barChartVisibility: "hidden",
                barChartShrink: 0,
            })
        }
    };

    render() {
        let {data, graph, graph2, color, color2, classes} = this.props;
        if (color == null) color = config.theme.palette.primary[500];
        if (color2 == null) color2 = config.theme.palette.secondary[500];
        let secondBar;
        if (graph2 != null)
            secondBar = <Bar dataKey={graph2} fill={color2} strokeWidth={2}/>;
        return (
            <div>
                <IconButton className={classes.button} aria-label="Delete" onClick={this.onClickSwitch}>
                    <ShowChart style={{visibility: this.state.lineChartVisibility}}/>
                </IconButton>
                <IconButton className={classes.button} aria-label="Delete" onClick={this.onClickSwitch}>
                    <BarChartIcon style={{visibility: this.state.barChartVisibility}}/>
                </IconButton>
                <ResponsiveContainer width={"100%"} height={this.state.lineChartShrink} style={{visibility: this.state.lineChartVisibility}}>
                    <LineChart width={600} height={300} data={data}
                               margin={{top: 5, right: 30, left: 20, bottom: 5}} style={{visibility: this.state.lineChartVisibility}}>
                        <XAxis dataKey="date"/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Line type="monotone" dataKey={graph} stroke={color} strokeWidth={2.5}/>
                        <Line type="monotone" dataKey={graph2} stroke={color2} strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer width={"100%"} height={this.state.barChartShrink} style={{visibility: this.state.barChartVisibility}}>
                    <BarChart width={600} height={300} data={data}
                              margin={{top: 5, right: 30, left: 20, bottom: 5}} style={{visibility: this.state.barChartVisibility}}>
                        <XAxis dataKey="date"/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Bar dataKey={graph} fill={color} strokeWidth={2.5}/>
                        {
                            secondBar
                        }
                    </BarChart>
                </ResponsiveContainer>
            </div>

        );
    }
}

BasicChart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    graph: PropTypes.object.isRequired,
    color: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicChart);

