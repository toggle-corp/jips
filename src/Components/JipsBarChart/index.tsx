import React, { PureComponent } from 'react';
import { Typography } from 'antd';
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

export default class JipsBarChart extends PureComponent {
  
    getBars = () =>{

    }

  render() {
    const {Title} = Typography;
    return (
        <div style={{minHeight:"29vh", maxHeight:"30vh", padding:"10px"}}>
            <Typography>
                <Title style={{fontSize:"14px"}}>Literacy among persons 15 years and above</Title>
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
                <Bar width={30} dataKey="men" fill="#505BA1" background={{ fill: '#eee' }} ><LabelList dataKey="men" position="top" /> </Bar>
                <Bar dataKey="women" fill="#491746" background={{ fill: '#eee' }}><LabelList dataKey="women" position="top" /> </Bar>
            </BarChart>
        </div>
    );
  }
}
