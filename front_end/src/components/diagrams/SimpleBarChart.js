import React from "react";
import BarChart from "recharts/es6/chart/BarChart";
import Bar from "recharts/es6/cartesian/Bar"
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


class SimpleBarChart extends React.Component {
    render () {
        let {data, graph, graph2, color, color2} = this.props;
        return (
            <ResponsiveContainer width={"100%"} height={200}>
                <BarChart width={600} height={300} data={data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey={graph} fill={color} />
                    <Bar dataKey={graph2} fill={color2} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

SimpleBarChart.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    graph: PropTypes.object.isRequired,
    color: PropTypes.object.isRequired,
};

export default withTheme()(SimpleBarChart);

