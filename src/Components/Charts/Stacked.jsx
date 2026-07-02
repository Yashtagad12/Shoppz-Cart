import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { stackedCustomSeries } from '../../data/dummy';

const Stacked = ({ width = '100%', height = 500 }) => {
  // Merge Budget & Expense series into one dataset
  const chartData = stackedCustomSeries[0].dataSource.map((item, index) => ({
    month: item.x,
    Budget: item.y,
    Expense: stackedCustomSeries[1].dataSource[index]?.y || 0,
  }));

  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#e5e7eb"
        />

        <XAxis
          dataKey="month"
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          cursor={{ fill: 'rgba(0,0,0,0.04)' }}
        />

        <Legend />

        {/* Budget */}
        <Bar
          dataKey="Budget"
          stackId="a"
          fill="#3B82F6"
          radius={[4, 4, 0, 0]}
        />

        {/* Expense */}
        <Bar
          dataKey="Expense"
          stackId="a"
          fill="#10B981"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Stacked;