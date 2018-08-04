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
import getGrowthDerivatives from "../../testData/metaDataFunctions"
import config from "../../config/config";

const getMaxData = function(data, graph) {
    let max = -1000;
    for (let i = 0; i < data.length; i++) {
        if (data[i][graph] != null && data[i][graph] > max)
            max = data[i][graph];
    }
    return max;
};

const getMinData = function(data, graph) {
    let min = 1000;
    for (let i = 0; i < data.length; i++) {
        if (data[i][graph] != null && data[i][graph] < min)
            min = data[i][graph];
    }
    return min;
};

const gradientOffset = function(data, graph) {
    const dataMax = getMaxData(data, graph);
    const dataMin = getMinData(data, graph);
    if (dataMax <= 0) {
        return 0
    }
    else if (dataMin >= 0) {
        return 1
    }
    else {
        return dataMax / (dataMax - dataMin);
    }
};

class GrowthChart extends React.Component {
    render() {
        let {data, graph, graph2, color, color2} = this.props;
        if (color == null) color = config.theme.palette.primary[500];
        if (color2 == null) color2 = config.theme.palette.secondary[500];
        let off = gradientOffset(data, graph + "_growthDerivative");
        return (
            <ResponsiveContainer width={"100%"} height={200}>
                <AreaChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <Tooltip/>
                    <ReferenceLine y={0} label="" stroke="red"/>
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor={color} stopOpacity={1}/>
                            <stop offset={off} stopColor={color2} stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey={graph + "_growthDerivative"} stroke={color} fill="url(#splitColor)"/>
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}

GrowthChart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    graph: PropTypes.object.isRequired,
    color: PropTypes.object.isRequired,
    color2: PropTypes.object.isRequired,
};

export default withTheme()(GrowthChart);