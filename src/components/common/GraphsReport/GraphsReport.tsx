import React from 'react';
import ReportBox from 'components/core/ReportBox';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './GraphsReport.module.scss';

const data = [
  {
    'name': 'Page A',
    'uv': 4000,
    'pv': 2400,
  },
  {
    'name': 'Page B',
    'uv': 3000,
    'pv': 1398,
  },
  {
    'name': 'Page C',
    'uv': 2000,
    'pv': 9800,
  },
  {
    'name': 'Page D',
    'uv': 2780,
    'pv': 3908,
  },
  {
    'name': 'Page E',
    'uv': 1890,
    'pv': 4800,
  },
  {
    'name': 'Page F',
    'uv': 2390,
    'pv': 3800,
  },
  {
    'name': 'Page G',
    'uv': 3490,
    'pv': 4300,
  },
];

interface IProps {
}

export default React.memo<IProps>(function GraphsReport() {
  return (
    <ReportBox className={styles.root}>
      <LineChart width={730} height={250} data={data}
                 margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis padding={{ left: 0, right: 20 }} axisLine={false} tickLine={false} dataKey="name" />
        <YAxis padding={{ top: 20, bottom: 0 }} axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ReportBox>
  );
});