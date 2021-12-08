import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataValues = props.data.map(element => element.value)
  const maximum = Math.max(...dataValues)

  return (
    <div className="chart">
      {props.data.map((element) => (
        <ChartBar
          key={element.label}
          value={element.value}
          max={maximum}
          label={element.label}
        />
      ))}
    </div>
  );
};
export default Chart;
