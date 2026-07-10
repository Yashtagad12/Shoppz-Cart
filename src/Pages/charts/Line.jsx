import React from "react";
import { Header } from "../../Components";
import LineChartComponent from "../../Components/Charts/LineChart";

const Line = () => {
  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-2xl shadow">

      <Header
        category="Chart"
        title="Line Chart"
      />

      <div className="mt-8">
        <LineChartComponent />
      </div>

    </div>
  );
};

export default Line;