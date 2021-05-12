import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { IDPsInCamps } from '../../icons';
import { colors } from '../../utils/colorUtil';

import styles from './styles.module.scss';

type JipsStackedBarChartProps = {
  title?:string,
  icon?:any,
  data:any[],
  height:number,
  width:number,
  showLegends?:boolean|false
}

export default function JipsStackedBarChart (props:JipsStackedBarChartProps) {
  const {height, width, icon, title, data, showLegends} = props;

  const [graphData, setGraphData] = React.useState<any>([]);

  const renderGraph = () =>{
    const keySet = Object.keys(data[0]).filter((key:string)=>key!=="name" && key!== "variable" && key!=="key");
    const bars:any = [];
    keySet.forEach((payload:string, index:number)=>{
      const bar = <Bar 
                    dataKey={payload}
                    stackId="a"
                    fill={colors[index]}
                    >
                    <LabelList dataKey={payload} position="middle" fill="#fff"/>
                  </Bar>;
      bars.push(bar);
    });
    return bars;
  }

  const renderCustomAxisTick = (props:any) => {
    const {x,y } = props;
    console.log("props: ", props);
    return (
        <IDPsInCamps x={x - 12} y={y + 4} />
    );
  };

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
        <ResponsiveContainer height={height} width={width}>
        <BarChart
          width={width-10}
          height={showLegends?height:height-50}
          data={graphData}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          barCategoryGap={2}
        >
          <XAxis type="number" range={[0, 100]} hide={true} />
          <YAxis dataKey="name" type="category"/>
          <Tooltip />
          {showLegends && <Legend />}
          {renderGraph()}
        </BarChart>
      </ResponsiveContainer>
      </div>
  );
}
