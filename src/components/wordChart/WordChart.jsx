import React from "react";
import { ResponsiveContainer, Treemap } from "recharts";

const data = [
  { name: "word", color: "#676767", value: 10 },
  { name: "word", color: "#676767", value: 12 },
  { name: "word", color: "#676767", value: 14 },
  { name: "Sad", color: "#613D51", value: 14 },
  {
    name: "Nervous",
    color: "#613D51",
    value: 56,
  },
  {
    name: "Happiness",
    color: "#6143A1",
    value: 56,
  },
  {
    name: "Regret",
    color: "#451932",
    value: 56,
  },
  { name: "word", color: "#676767", value: 12 },
  { name: "word", color: "#676767", value: 14 },
  {
    name: "Nervous",
    color: "#613D51",
    value: 56,
  },
  {
    name: "Pain",
    color: "#613D51",
    value: 56,
  },
];

function SimpleWordCloud() {
  return (
    <div className="word-chart">
      <h1 className="chart_title">Word Cloud</h1>
      <ResponsiveContainer width={500} height={200}>
        <Treemap
          data={data}
          dataKey="value"
          ratio={4 / 3}
          stroke={(d) => d.color}
          fill="#8884d8"
          content={<CustomizedContent />}
        />
      </ResponsiveContainer>
    </div>
  );
}

function CustomizedContent(props) {
  const { depth, x, y, width, height, index, payload, color, rank, name } =
    props;

  const fontSize = depth < 2 ? 24 - depth * 6 : 12;
  const fill = color;

  return (
    <g>
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill={fill}
        fontSize={fontSize}
        textAnchor="middle"
      >
        {name}
      </text>
    </g>
  );
}

export default SimpleWordCloud;
