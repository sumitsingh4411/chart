import * as d3 from "d3";
import "./style.css";
import React, { useEffect } from "react";

const data = [
  { label: "Mantra Tool", value: 120, colorValue: "#64D5AA" },
  { label: "Blank State", value: 40, colorValue: "#B272FD" },
  { label: "Gratitude letter", value: 20, colorValue: "#EB5A78" },
  { label: "Letter to Shelf", value: 5, colorValue: "#F1B40A" },
  { label: "Thought Guides", value: 10, colorValue: "#5C97B9" },
];
var colorLegend = [
  //reds from dark to light
  { color: "#67000d", text: "Negative", textColor: "#ffffff" },
  "#a50f15",
  "#cb181d",
  "#ef3b2c",
  "#fb6a4a",
  "#fc9272",
  "#fcbba1",
  "#fee0d2",
  //neutral grey
  { color: "#f0f0f0", text: "Neutral" },
  // blues from light to dark
  "#deebf7",
  "#c6dbef",
  "#9ecae1",
  "#6baed6",
  "#4292c6",
  "#2171b5",
  "#08519c",
  { color: "#08306b", text: "Positive", textColor: "#ffffff" },
];

function SimpleBubbleChart() {
  useEffect(() => {
    // chart data
    const data = [
      { label: "Word", x: 50, y: 50, r: 30, color: "#212121" },
      { label: "Love", x: 100, y: 100, r: 25, color: "#6F78F6" },
      { label: "Word", x: 170, y: 80, r: 30, color: "#212121" },
      { label: "Word", x: 220, y: 100, r: 30, color: "#212121" },
      {
        label: "Nervous",
        x: 50,
        y: 170,
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
        y: 350,
        r: 80,
        color: "#9055FF",
      },
      { label: "Word", x: 50, y: 380, r: 30, color: "#212121" },
      { label: "Word", x: 50, y: 340, r: 30, color: "#212121" },
      { label: "Word", x: 340, y: 380, r: 30, color: "#212121" },
      { label: "Word", x: 370, y: 340, r: 30, color: "#212121" },
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
