import React from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";

const data = [
  { name: "Mantra Tool", value: 120, label: "45%" },
  { name: "Blank State", value: 40, label: "40%" },
  { name: "Gratitude letter", value: 20, label: "20%" },
  { name: "Letter to Shelf", value: 5, label: "5%" },
  { name: "Thought Guides", value: 10, label: "10%" },
  { name: "Gratitude General", value: 25, label: "25%" },
  { name: "Mood Check In", value: 35, label: "35%" },
];

const COLORS = [
  "#64D5AA",
  "#B272FD",
  "#EB5A78",
  "#F1B40A",
  "#5C97B9",
  "#F9987F",
  "#B09FE5",
];

function SimplePieChart() {
  return (
    <div className="pie-chart">
      <h1 className="chart_title">Pie Chart</h1>
      <PieChart width={600} height={500}>
        <Pie
          startAngle={-80}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name }) => `${name}`}
          activeIndex={0}
          activeShape={(props) => (
            <Sector
              cx={props.cx}
              cy={props.cy}
              innerRadius={props.innerRadius}
              outerRadius={props.outerRadius + 10}
              startAngle={props.startAngle}
              endAngle={props.endAngle}
              fill={props.fill}
            />
          )}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              strokeWidth={2}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default SimplePieChart;
