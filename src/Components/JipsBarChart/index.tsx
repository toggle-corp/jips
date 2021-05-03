import React from 'react';
import { BarChart, Bar, XAxis, LabelList, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Camps IDPS',
    men: 87,
    women: 59,
  },
  {
    name: 'IDP Returnees',
    men: 92,
    women: 74,
  },
  {
    name: 'Non-displaced',
    men: 83,
    women: 54,
  },
];

type JipsBarChartProps ={
  data?:any[],
  title?:string,
  height:number,
  width:number,
}

export default function JipsBarChart(props:JipsBarChartProps) {
  const {height, width} = props;
  return (
    <div style={{ minHeight:height}}>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar width={30} dataKey="men" fill="#505BA1" background={{ fill: '#eee' }} ><LabelList dataKey="men" position="top" /> </Bar>
        <Bar dataKey="women" fill="#491746" background={{ fill: '#eee' }}><LabelList dataKey="women" position="top" /> </Bar>
      </BarChart>
    </div>
  );
}
