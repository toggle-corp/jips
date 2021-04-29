import React, { PureComponent } from 'react';
import { Typography } from 'antd';
import { ComposedChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Camps IDPS',
    men: 87,
    women: 59,
    labourforce:22,
  },
  {
    name: 'IDP Returnees',
    men: 92,
    women: 74,
  },
  {
    name: 'Non displaced',
    men: 83,
    women: 54,
  },
];

export default class JipsStackedBarChart extends PureComponent {

  getStackedBars = () => {

  }
  
  render() {
    const { Title } = Typography;
    return (
      <div style={{ minHeight: "29vh", maxHeight: "30vh", padding: "10px" }} >
        <ComposedChart

          width={500}
          height={300}
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
          <Bar dataKey="men" stackId="a" fill="#505BA1" />
          <Bar dataKey="women" stackId="a" fill="#491746" />
        </ComposedChart>
      </div>

    );
  }
}
