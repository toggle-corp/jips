import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, LabelList, ResponsiveContainer } from 'recharts';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';
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
  const language = React.useContext(LanguageContext);

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

  React.useEffect(()=>{
    setGraphData(data);
    (showLegends) ? setLEgend(true) : setLEgend(false);
  }, [data, showLegends]);

  return (
      <div className={styles.stackedbar}>
        { title && language === Language.en && (
        <div className={styles.heading}>
          {icon} {title}
        </div>
      )}
      { title && language === Language.ar && (
        <div className={styles.heading} style={{textAlign:"right"}}>
          {title} {icon}
        </div>
      )}
        <ResponsiveContainer height={height} width={width}>
          <BarChart
            width={width-10}
            height={(!showLegends)? height : height-75}
            data={graphData}
            layout="vertical"
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 15,
            }}
            barCategoryGap={1}
            barSize={25}
          >
            <XAxis type="number" range={[0, 100]} hide={true} />
            <YAxis dataKey="name" height={50} type="category" orientation={(language===Language.ar)?"right":"left"}/>
            {legend && <Legend />}
            {renderGraph()}
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
}
