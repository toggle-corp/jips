import React, { PureComponent } from 'react';
import { Typography } from 'antd';
import { ComposedChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

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

export default class JipsStackedBarChart extends PureComponent {

  getStackedBars = () => {

  }
  
  render() {
    const { Title } = Typography;
    return (
      <div style={{ minHeight: "29vh", maxHeight: "30vh", padding: "10px" }} >
        <Typography>Main activity of working age persons (15-64 years)</Typography>
        <ComposedChart

          width={600}
          height={280}
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
}
