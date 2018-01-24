import React from 'react';
import TrendComp from 'react-trend';

const Trend = () => (
  <TrendComp
    smooth
    width={300}
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
    gradient={['#FA7394', '#FF3266']}
    radius={10}
    strokeWidth={2.8}
    strokeLinecap="round"
  />
);

export default Trend;
