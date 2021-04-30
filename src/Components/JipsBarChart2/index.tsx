import React, { PureComponent } from 'react';
import { Typography } from 'antd';
import { BarChart, Bar, XAxis, LabelList, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Camps IDPS',
    male: 24,
    female: 37,
  },
  {
    name: 'IDP Returnees',
    male: 19,
    female: 27,
  },
  {
    name: 'Non-displaced',
    male: 13,
    female: 18,
  },
];

type JipsBarChart2Props ={
  data?:any[],
  title?:string,
}
export default function JipsBarChart2(props:JipsBarChart2Props) {
  const { Title } = Typography;
  return (
    <div style={{ minHeight: "29vh", maxHeight: "30vh", padding: "10px" }}>
      <Typography>
        <Title style={{ fontSize: "14px" }}>Youth (15-24 years) not working and not in education</Title>
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
        <Bar width={30} dataKey="male" fill="#505BA1" background={{ fill: '#eee' }} ><LabelList dataKey="male" position="top" /> </Bar>
        <Bar dataKey="female" fill="#491746" background={{ fill: '#eee' }}><LabelList dataKey="female" position="top" /> </Bar>
      </BarChart>
    </div>
  );
}