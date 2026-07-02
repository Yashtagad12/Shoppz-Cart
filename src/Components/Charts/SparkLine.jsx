import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const SparkLine = ({ data }) => {
  // Convert your dummy.jsx data
  const chartData = data.map((item) => ({
    month: `P${item.x}`,
    Budget: item.yval * 10000,
    Expense: item.yval * 8000,
  }));

  return (
    <div className="w-full h-65">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="budget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.02} />
            </linearGradient>

            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tickFormatter={(value) => `${value / 1000}k`}
          />

          <Tooltip
            formatter={(value) => [`$${value.toLocaleString()}`]}
          />

          <Legend />

          <Area
            type="monotone"
            dataKey="Budget"
            stroke="#3B82F6"
            fill="url(#budget)"
            strokeWidth={3}
            activeDot={{ r: 7 }}
          />

          <Area
            type="monotone"
            dataKey="Expense"
            stroke="#10B981"
            fill="url(#expense)"
            strokeWidth={3}
            activeDot={{ r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;