import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, Legend, YAxis } from 'recharts';
import { _cs } from '@togglecorp/fujs';
import { colors, bgColors } from '../../utils/colorUtil';

import styles from './styles.module.scss';
import { IDPsInCamps, IDPsReturnees, NonDisplaced } from '../../icons';
import { LanguageContext } from '../../Context';
import { Language } from '../../types';

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

  const language = React.useContext(LanguageContext);

  React.useEffect(() => {
    const keyset = Object.keys(data[0]).slice(1);
    setKeys(keyset);
    setDatas(data);

  }, [data]);

  const renderCustomAxisTick = (props: any) => {
    const { x, y, payload } = props;
    var showTitle = payload.value < 3;
    var icon: any;
    switch (payload.value) {
      case 0: icon = <IDPsInCamps x={x - 30} y={y - 5} />; break;
      case 1: icon = <IDPsReturnees x={x - 30} y={y - 5} />; break;
      case 2: icon = <NonDisplaced x={x - 30} y={y - 5} />; break;
      default: icon = <text fontSize={10} x={x - 30} y={y + 3} fill="#000">
        {(datas && datas.length > payload.value) ? datas[payload.value].name : payload.value}
      </text>; break;
    }
    console.log(payload, data);
    return <svg>
      <g>
        {icon}
        {showTitle && <text x={x - 30} y={y + 2} fontSize={10}>{(datas && datas.length > payload.value) ? datas[payload.value].name : payload.value}</text>}
      </g>
    </svg>;
  };

  const CustomLabel = (p: any) => {
    return <text x={p.x} y={p.y} dx={p.width / 5} dy={-2} fill={p.fill} fontSize={12} textAnchor="top">{p.value + "%"}</text>
  }

  const getBar = () => {
    if (keys) {
      const filteredKeys = (language === Language.ar) ? keys.filter((key) => (key !== "key" && key !== "name")) : keys.filter((key) => (key !== "key" && key !== "name"));
      const bars = filteredKeys.map((key, index) => {
        return (
          <Bar barSize={30}
            dataKey={key}
            fill={colors[index]}
            background={{ fill: bgColors[index] }}
            fontSize={12}
            label={CustomLabel}
          />
        );
      });
      return bars;
    }
  }

  return (
    <div style={{ minHeight: height }} className={_cs(styles.barchart, className)}>
      { title && language === Language.en && (
        <div className={styles.heading}>
          {icon} {title}
        </div>
      )}
      { title && language === Language.ar && (
        <div className={styles.heading} style={{ textAlign: "right" }}>
          {title} {icon}
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
        <XAxis dataKey="key" type="category" tick={renderCustomAxisTick} reversed={language === Language.ar} />
        <YAxis type="number" domain={[0, 100]} hide={true} />
        <Tooltip />
        <Legend fontSize={10} />
        {getBar()}
      </BarChart>
    </div>
  );
}
