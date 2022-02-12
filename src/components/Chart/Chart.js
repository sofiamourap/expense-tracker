import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart({ dataPoints }) {
  //get an array of values to pass to the Math.max
  const valueArray = dataPoints.map((e) => e.value);

  //use the spread operator to pull the elements of the array and pass them as stand alone arguments to the Math.max
  const totalMax = Math.max(...valueArray);
  return (
    <div className="chart">
      {dataPoints.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={totalMax}
          label={point.label}
          key={point.label}
        />
      ))}
    </div>
  );
}
