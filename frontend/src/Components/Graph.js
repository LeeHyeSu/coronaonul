import React, { PureComponent } from 'react';
import moment from 'moment';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const today = moment().format("MM-DD");
const oneDayBefore = moment().subtract(1, 'd').format("MM-DD");
const twoDayBefore = moment().subtract(2, 'd').format("MM-DD");
const threeDayBefore = moment().subtract(3, 'd').format("MM-DD");
const fourDayBefore = moment().subtract(4, 'd').format("MM-DD");
const fiveDayBefore = moment().subtract(5, 'd').format("MM-DD");
const sixDayBefore = moment().subtract(6, 'd').format("MM-DD");

const data = [
  {
    name: `${sixDayBefore}`, 확진자: 30,
  },
  {
    name: `${fiveDayBefore}`, 확진자: 20,
  },
  {
    name: `${fourDayBefore}`, 확진자: 18,
  },
  {
    name: `${threeDayBefore}`, 확진자: 38,
  },
  {
    name: `${twoDayBefore}`, 확진자: 57,
  },
  {
    name: `${oneDayBefore}`, 확진자: 40,
  },
  {
    name: `${today}`, 확진자: 46, 
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
        <div style={{width: '100%', height: 400}}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                    top: 60, right: 0, left: -30, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="확진자" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
              </ResponsiveContainer>
      </div>
    );
  }
}
