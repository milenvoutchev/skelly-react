import React from 'react';
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { withTheme } from '@material-ui/styles';

const SAMPLE_DATA = [
    {
        date: 'SAMPLE',
        portfolio: 200,
        contributions: 200,
        returns: 0,
    },
    {
        date: 'SAMPLE',
        portfolio: 420,
        contributions: 400,
        returns: 20,
    },
    {
        date: 'SAMPLE',
        portfolio: 650,
        contributions: 600,
        returns: 50,
    },
    {
        date: 'SAMPLE',
        portfolio: 925,
        contributions: 800,
        returns: 125,
    },
];

export default withTheme(function ProjectionChart({theme, data = SAMPLE_DATA}) {
    return (
        <ResponsiveContainer width="99%" height={225}>
            <LineChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis
                    style={{
                        fontSize: '0.8em',
                        fontFamily: 'Roboto, sans-serif',
                    }}
                    dataKey="date"
                />
                <YAxis
                    style={{
                        fontSize: '0.8em',
                        fontFamily: 'Roboto, sans-serif',
                    }}
                />
                <Tooltip />
                <Line type="monotone" dataKey="portfolio" stackId="1" stroke={theme.palette.common.portfolio} />
                <Line type="monotone" dataKey="contributions" stackId="1" stroke={theme.palette.common.contributions} />
                <Line type="monotone" dataKey="returns" stackId="1" stroke={theme.palette.common.returns} />
            </LineChart>
        </ResponsiveContainer>
    );
});
