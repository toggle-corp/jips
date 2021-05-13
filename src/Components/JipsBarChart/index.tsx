import React from 'react';
import { BarChart, Bar, XAxis, LabelList, Tooltip, Legend, YAxis } from 'recharts';
import { _cs } from '@togglecorp/fujs';
import { colors, bgColors } from '../../utils/colorUtil';

import styles from './styles.module.scss';
// import { IDPsInCamps, IDPsReturnees, NonDisplaced } from '../../icons';

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

  React.useEffect(() => {
    const keyset = Object.keys(data[0]).slice(1);
    setKeys(keyset);
    setDatas(data);

  }, [data]);

  // const renderCustomAxisTick = (props:any) => {
  //   const {x,y, index, payload } = props;
  //   var icon:any;
  //   switch(index){
  //     case 0: icon = <IDPsInCamps x={x - 20} y={y - 10 } />; break;
  //     case 1: icon = <IDPsReturnees x={x - 20} y = {y - 10} />; break;
  //     case 2: icon = <NonDisplaced x={x - 20} y = {y - 10} />; break;
  //     default: icon = <svg x={x - 12} y={y + 4} width={45} height={30} viewBox="0 0 1024 1024" fill="#000"><text textAnchor="middle">{payload.value}</text></svg>; break;
  //   }

  //   return icon;
  // };

  const CustomLabel = (p: any) => {
    return <text x={p.x} y={p.y} dx={p.width / 5} dy={-2} fill={p.fill} fontSize={12} textAnchor="top">{p.value + "%"}</text>
  }

  const getBar = () => {
    if(keys) {
      const bars = keys.filter((key)=>(key!=="key" && key!=="name")).map((key, index)=>{
        return (
          <Bar barSize={30} dataKey={key} fill={colors[index]} background={{ fill: bgColors[index] }} fontSize={12} >
            <LabelList dataKey={key} position="top" fill={colors[index]} content={CustomLabel} />
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
        width={width * 0.95}
        height={height}
        data={datas}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap={2}
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
