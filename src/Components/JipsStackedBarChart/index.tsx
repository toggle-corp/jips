import React, { useEffect } from 'react';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList } from 'recharts';
import { Dimension } from '../../types';

const data = [
  {
    name: 'Camps IDPS',
    "Work for profit":32 ,
    "Own-use farming": 31,
    "Out of labour force":37,
  },
  {
    name: 'IDP Returnees',
    "Work for profit": 30,
    "Own-use farming": 32,
    "Out of labour force":38,
  },
  {
    name: 'Non displaced',
    "Work for profit": 19,
    "Own-use farming": 33,
    "Out of labour force":48,
  },
];

type JipsStackedBarChartProps = {
  title?:string,
  data?:any[],
  height:number,
  width:number,
} 

export default function JipsStackedBarChart (props:JipsStackedBarChartProps) {
  const {height, width} = props;
  return (
      <div style={{ minHeight: "29vh"}} >
        <h3>Main activity of working age persons (15-64 years)</h3>
        <ComposedChart
          width={width}
          height={height}
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Work for profit" stackId="a" fill="#505BA1" >
            <LabelList dataKey="Work for profit" position="middle" fill="#fff"/>
          </Bar>
          <Bar dataKey="Own-use farming" stackId="a" fill="#491746" >
            <LabelList dataKey="Own-use farming" position="middle" fill="#fff"/>
          </Bar>
          <Bar dataKey="Out of labour force" stackId="a" fill="#852D57" >
            <LabelList dataKey="Out of labour force" position="middle" fill="#fff"/>
          </Bar>
          
        </ComposedChart>
      </div>
  );
}
