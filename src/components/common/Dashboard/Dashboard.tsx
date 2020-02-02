import React from 'react';
import Locations from 'components/core/Locations';
import Info from 'components/core/Info';
import WeekReport from '../WeekReport';
import DetailedReport from '../DetailedReport';
import MapReport from '../MapReport';
import GraphsReport from '../GraphsReport';

interface IProps {
}

export default React.memo<IProps>(function Dashboard() {
  return (
    <div>
      Dashboard
      <WeekReport />
      <Info />
      <DetailedReport />
      <MapReport />
      <Locations />
      <GraphsReport />
    </div>
  );
});