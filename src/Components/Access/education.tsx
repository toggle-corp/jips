import React, { PureComponent } from 'react';
import { Typography } from 'antd';
import { BarChart, Bar, XAxis, LabelList, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Camps IDPS',
    boys: 51,
    girls: 51,
  },
  {
    name: 'IDP Returnees',
    boys: 73,
    girls: 64,
  },
  {
    name: 'Non-displaced',
    boys: 45,
    girls: 46,
  },
];

type JipsBarChartProps ={
  data?:any[],
  title?:string,
}
export default function Education(props:JipsBarChartProps) {
  const { Title } = Typography;
  return (
    <div style={{ minHeight: "29vh", maxHeight: "30vh", padding: "10px" }}>
      <Typography>
        <Title style={{ fontSize: "14px" }}>Education:  Primary school attendance (6-13 years)</Title>
      </Typography>
      <BarChart
        width={400}
        height={300}
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
        <Bar width={30} dataKey="boys" fill="#505BA1" background={{ fill: '#eee' }} ><LabelList dataKey="men" position="top" /> </Bar>
        <Bar dataKey="girls" fill="#491746" background={{ fill: '#eee' }}><LabelList dataKey="women" position="top" /> </Bar>
      </BarChart>
    </div>
  );
}