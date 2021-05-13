import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { colors } from '../../utils/colorUtil';

import styles from './styles.module.scss';

type JipsStackedBarChartProps = {
  title?: string,
  icon?: any,
  data: any[],
  height: number,
  width: number,
  showLegends?: boolean | false
}

export default function JipsStackedBarChart(props: JipsStackedBarChartProps) {
  const { height, width, icon, title, data, showLegends } = props;

  const [graphData, setGraphData] = React.useState<any>([]);
  const [legend, setLEgend] = React.useState<boolean>(false);

  // const CustomLabel = (p:any) =>{
  //   return <text x={p.x} y={p.y} dx={p.width/5} dy={p.height/2} fill="#fff" fontSize={12} textAnchor="top">{p.value + "%"}</text>
  // }

  const renderGraph = () => {
    const keySet = Object.keys(data[0]).filter((key: string) => key !== "name" && key !== "variable" && key !== "key");
    const bars: any = [];

    keySet.forEach((payload: string, index: number) => {
      const bar = <Bar
        dataKey={payload}
        stackId="1"
        fill={colors[index]}
      >
        <LabelList dataKey={payload} fontSize={12} position="center" fill="#fff" />
      </Bar>
      bars.push(bar);
    });
    return bars;
  }

  // const renderCustomAxisTick = (props:any) => {
  //   const {x,y } = props;
  //   return (
  //       <IDPsInCamps x={x - 12} y={y + 4} />
  //   );
  // };

  React.useEffect(() => {
    setGraphData(data);
    (showLegends) ? setLEgend(true) : setLEgend(false);
  }, [data, showLegends]);

  return (
    <div className={styles.stackedbar}>
      { title && (
        <div className={styles.heading}>
          {icon} {title}
        </div>
      )}
      <ResponsiveContainer height={height} width={width}>
        <BarChart
          width={width - 10}
          height={(!showLegends) ? height : height - 75}
          data={graphData}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          barCategoryGap={1}
          barSize={25}
        >
          <XAxis type="number" range={[0, 100]} hide={true} />
          <YAxis dataKey="name" type="category" />
          {legend && <Legend />}
          {renderGraph()}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
