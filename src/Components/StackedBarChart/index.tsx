import React from 'react';
import {
    BarChart,
    Bar,
    YAxis,
    XAxis,
    Tooltip,
} from 'recharts';

interface Props {
    data: any[];
    height: number;
    width: number;
}

function StackedBarChart(props: Props) {
    const {
        height,
        width,
        data,
    } = props;


    return (
        <BarChart
            layout="vertical"
            width={width}
            height={height}
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
            <YAxis
                type="category"
                dataKey="gender"
            />
            <XAxis type="number" hide />
            <Tooltip
                labelFormatter={(label, payload) => (
                    `${payload[0]?.payload?.key}-${label}`
                )}
            />
            <Bar stackId="a" dataKey="Work for profit/pay" fill="#8884d8" />
            <Bar stackId="a" dataKey="Own-use farming" fill="#8862a6" />
            <Bar stackId="a" dataKey="Out of labour force" fill="#82a97e" />
        </BarChart>
    )
}

export default StackedBarChart;
