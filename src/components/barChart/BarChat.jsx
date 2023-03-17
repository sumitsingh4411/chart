import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

function CustomBarChat() {
  const data = [
    {
      name: "Jan - Mar",
      temp: 15,
      fill: "#FF0000",
    },
    {
      name: "Apr - Jun",
      temp: 10,
      fill: "#00FF00",
    },
    {
      name: "Jul - Sep",
      temp: 20,
      fill: "#0000FF",
    },
    {
      name: "Oct - Dec",
      temp: 14,
      fill: "#FFFF00",
    },
  ];

  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;

    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={20}
        ry={20}
      />
    );
  };

  return (
    <div className="bar-chart">
      <h1 className="chart_title">Bar Chart</h1>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
        barSize={50}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="temp"
          shape={<CustomBar />}
          fill={data.map((d) => d.fill)}
        />

        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
        <YAxis dataKey="temp" />
      </BarChart>
    </div>
  );
}

export default CustomBarChat;
