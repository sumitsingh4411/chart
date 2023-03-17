import * as d3 from "d3";
import "./style.css";
import React, { useEffect } from "react";

function SimpleBubbleChart() {
  useEffect(() => {
    const data = [
      { label: "Word", x: 50, y: 50, r: 30, color: "#212121" },
      { label: "Love", x: 250, y: 50, r: 25, color: "#6F78F6" },
      { label: "Sad", x: 50, y: 250, r: 25, color: "#6F78F6" },
      { label: "Word", x: 170, y: 80, r: 30, color: "#212121" },
      { label: "Word", x: 220, y: 100, r: 30, color: "#212121" },
      {
        label: "Nervous",
        x: 80,
        y: 120,
        r: 50,
        color: "#DD97F5",
      },
      {
        label: "Nervous",
        x: 350,
        y: 170,
        r: 50,
        color: "#DD97F5",
      },
      {
        label: "Happiness",
        x: 200,
        y: 200,
        r: 80,
        color: "#9055FF",
      },
      {
        label: "Regret",
        x: 300,
        y: 300,
        r: 50,
        color: "#DD97F5",
      },
      { label: "Word", x: 50, y: 340, r: 30, color: "#212121" },
      { label: "Word", x: 300, y: 380, r: 30, color: "#212121" },
      { label: "Word", x: 370, y: 380, r: 30, color: "#212121" },
    ];

    // create circles
    const circles = d3
      .select(".chart-svg")
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => d.r)
      .attr("fill", (d) => d.color)
      .attr("class", "chart-circle");

    // add labels
    const labels = d3
      .select(".chart-svg")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.label)
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("fill", (d) => d.color)
      .attr("text-anchor", "middle")
      .attr("class", "chart-label");
  }, []);

  return (
    <div className="chart-container">
      <h1 className="chart_title">Bubble Chart</h1>
      <svg className="chart-svg"></svg>
    </div>
  );
}

export default SimpleBubbleChart;
