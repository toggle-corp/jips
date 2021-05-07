import React from 'react';
import { BarChart, Bar, XAxis, LabelList, Tooltip, Legend, YAxis } from 'recharts';
import {_cs} from '@togglecorp/fujs';
import {colors, bgColors} from '../../utils/colorUtil';

import styles from './styles.module.scss';
import { color } from 'html2canvas/dist/types/css/types/color';

type JipsBarChartProps = {
  data: any[],
  icon?: any,
  title?: string,
  height: number,
  width: number,
  className?: string,
}

export default function JipsBarChart(props: JipsBarChartProps) {
  const { height, width, className, icon, title, data } = props;

  const [datas, setDatas] = React.useState<any[]>();
  const [keys, setKeys] = React.useState<string[]>();

  React.useEffect(()=>{
    const keyset = Object.keys(data[0]).slice(1);
    setKeys(keyset);
    setDatas(data);

  }, [data]);

  // const CustomLabel = (p:any) =>{
  //   return <text x={p.x} y={p.y} fill={p.stroke} fontSize={12} textAnchor="top">{p.value + "%"}</text>
  // }

  const getBar = () => {
    if(keys) {
      const bars = keys.filter((key)=>(key!="key" && key!="name")).map((key, index)=>{
        return (
          <Bar barSize={25} dataKey={key} fill={colors[index]} background={{ fill: bgColors[index]}} fontSize={12} >
            <LabelList dataKey={key} position="top" fill={colors[index]} /> 
          </Bar>
        );
      });
      return bars;
    }
  }

  return (
    <div style={{ minHeight: height }} className={_cs(styles.barchart, className)}>
      { title && (
        <div className={styles.heading}>
          {icon} {title}
        </div>
      )}
      <BarChart
        width={width}
        height={height}
        data={datas}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 100]} hide={true} />
        <Tooltip />
        <Legend />
        {getBar()}
      </BarChart>
    </div>
  );
}
