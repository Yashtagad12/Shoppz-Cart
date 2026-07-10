import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { lineCustomSeries } from "../../data/dummy";
import { Header } from "../../Components";

const AreaChartComponent = () => {
  // Convert Syncfusion data
  const chartData = lineCustomSeries[0].dataSource.map((item, index) => ({
    month: item.x,
    income: item.y,
    expense: lineCustomSeries[1]
      ? lineCustomSeries[1].dataSource[index]?.y
      : null,
  }));

  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl shadow-lg p-6">

      {/* Heading */}

      <div className="mb-8">
        <Header
          category="Chart"
          title="Area Chart"
        />
      </div>

      <ResponsiveContainer width="100%" height={430}>

        <AreaChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >

          {/* Gradient */}

          <defs>

            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22C55E" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 13 }}
          />

          <YAxis
            tick={{ fontSize: 13 }}
          />

          <Tooltip />

          <Legend />

          <Area
            type="monotone"
            dataKey="income"
            name="Income"
            stroke="#3B82F6"
            fill="url(#income)"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            animationDuration={1500}
          />

          {chartData[0]?.expense !== null && (

            <Area
              type="monotone"
              dataKey="expense"
              name="Expenses"
              stroke="#22C55E"
              fill="url(#expense)"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              animationDuration={1800}
            />

          )}

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
};

export default AreaChartComponent;