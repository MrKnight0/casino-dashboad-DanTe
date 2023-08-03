import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = () => {
    const data = [
        { name: 'Enero', ventas: 12 },
        { name: 'Febrero', ventas: 19 },
        { name: 'Marzo', ventas: 3 },
        { name: 'Abril', ventas: 5 },
        { name: 'Mayo', ventas: 2 },
    ];

    return (
        <BarChart width={300} height={300} data={data}>
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ventas" fill="#8884d8" />
        </BarChart>
    );
};

export default ChartComponent;
