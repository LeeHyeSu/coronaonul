import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const today = moment().format("MM-DD");
const oneDayBefore = moment().subtract(1, "d").format("MM-DD");
const twoDayBefore = moment().subtract(2, "d").format("MM-DD");
const threeDayBefore = moment().subtract(3, "d").format("MM-DD");
const fourDayBefore = moment().subtract(4, "d").format("MM-DD");
const fiveDayBefore = moment().subtract(5, "d").format("MM-DD");
const sixDayBefore = moment().subtract(6, "d").format("MM-DD");

export default ({ sixDayBeforeData }) => {
  console.log(sixDayBeforeData);
  const data = [
    {
      name: `${sixDayBefore}`,
      지역발생: 20,
      해외유입: 10,
      확진자: 30,
    },
    {
      name: `${fiveDayBefore}`,
      지역발생: 15,
      해외유입: 5,
      확진자: 20,
    },
    {
      name: `${fourDayBefore}`,
      지역발생: 16,
      해외유입: 2,
      확진자: 18,
    },
    {
      name: `${threeDayBefore}`,
      지역발생: 27,
      해외유입: 13,
      확진자: 40,
    },
    {
      name: `${twoDayBefore}`,
      지역발생: 43,
      해외유입: 14,
      확진자: 57,
    },
    {
      name: `${oneDayBefore}`,
      지역발생: 33,
      해외유입: 7,
      확진자: 40,
    },
    {
      name: `${today}`,
      지역발생: 27,
      해외유입: 9,
      확진자: 36,
    },
  ];
  return (
    <div style={{ width: "100%", height: 400, paddingRight: "15px" }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 60,
            right: 0,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="해외유입" stackId="a" fill="#82ca9d" />
          <Bar dataKey="지역발생" stackId="a" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
