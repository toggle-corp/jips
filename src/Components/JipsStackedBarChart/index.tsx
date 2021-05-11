import React, { useEffect } from 'react';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { colors } from '../../utils/colorUtil';

import styles from './styles.module.scss';

type JipsStackedBarChartProps = {
  title?:string,
  icon?:any,
  data:any[],
  height:number,
  width:number,
}

export default function JipsStackedBarChart (props:JipsStackedBarChartProps) {
    const {height, width, icon, title, data} = props;

  const [graphData, setGraphData] = React.useState<any>([]);

  const renderGraph = () =>{
    const keySet = Object.keys(data[0]);
    const bars:any = [];
    keySet.slice(2).forEach((payload:string, index:number)=>{
      const bar = <Bar 
                    dataKey={payload}
                    stackId="a"
                    fill={colors[index%3]}
                    >
                    <LabelList dataKey={payload} position="middle" fill="#fff"/>
                  </Bar>;
      bars.push(bar);
    });
    return bars;
  }

  React.useEffect(()=>{
    setGraphData(data);
  }, [data]);

  return (
      <div className={styles.stackedbar}>
        { title && (
          <div className={styles.heading}>
            {icon} {title}
          </div>
        )}
        <ResponsiveContainer height="100%" width="90%" minHeight="28vh">
        <ComposedChart
          width={width-10}
          height={height}
          data={graphData}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          barCategoryGap={12}
        >
          <XAxis type="number" range={[0, 100]} />
          <YAxis dataKey="name" type="category" scale="band" tickMargin={2}/>
          <Tooltip />
          {/* <Legend /> */}
          {renderGraph()}
        </ComposedChart>
      </ResponsiveContainer>
      </div>
  );
}
