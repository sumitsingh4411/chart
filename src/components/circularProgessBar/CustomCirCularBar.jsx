import React, { useEffect, useState } from "react";
import "./style.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 400 },
  { name: "Group C", value: 400 },
  { name: "Group D", value: 400 },
];
function CustomCirCularBar() {
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    let max = 0;
    let maxIndex = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i] > max) {
        max = data[i];
        maxIndex = i;
      }
    }

    setMaxIndex(maxIndex);
  }, [data]);

  const angles = [Math.PI / 2, 0, (3 * Math.PI) / 2, Math.PI];
  return (
    <div className="circular-progress-bar">
      <h1 className="chart_title">Circular Progress Bar</h1>
      <svg width="200" height="200">
        {angles.map((angle, index) => (
          <Quadrant key={index} angle={angle} isActive={index === maxIndex} />
        ))}
        <CrossLine angle={angles[maxIndex]} />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="white"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default CustomCirCularBar;

const Quadrant = ({ angle, isActive }) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    const x = 50 + 50 * Math.sin(angle);
    const y = 50 - 50 * Math.cos(angle);

    setPath(
      `M50,50 L50,0 A50,50 0 ${angle > Math.PI ? "1" : "0"},1 ${x},${y} Z`
    );
  }, [angle]);

  return (
    <path
      d={path}
      fill={isActive ? "red" : "gray"}
      stroke="white"
      strokeWidth="1"
    />
  );
};

const CrossLine = ({ angle }) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    const x1 = 50 + 40 * Math.sin(angle);
    const y1 = 50 - 40 * Math.cos(angle);
    const x2 = 50 + 60 * Math.sin(angle);
    const y2 = 50 - 60 * Math.cos(angle);

    setPath(`M${x1},${y1} L${x2},${y2}`);
  }, [angle]);

  return <path d={path} stroke="white" strokeWidth="1" />;
};
