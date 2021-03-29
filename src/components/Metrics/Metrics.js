import React from 'react';
import MetricsItem from './MetricsItem';

const Metrics = ({level}) => {

    level = 1
    return (
        <div style={{display: 'flex'}}>
            <MetricsItem label="Excellent" lineColor="#97FF46" scoreRange="320-255" emphasized={1 == level ? true : false}/>
            <MetricsItem label="Very good" lineColor="#FBFF46" scoreRange="255-200" emphasized={2 == level ? true : false}/>
            <MetricsItem label="Good" lineColor="#FF9F46" scoreRange="200-150" emphasized={3 == level ? true : false}/>
            <MetricsItem label="Poor" lineColor="#FF7246" scoreRange="150-75" emphasized={4 == level ? true : false}/>
            <MetricsItem label="Very poor" lineColor="#FF4646" scoreRange="75-0" emphasized={5 == level ? true : false}/>
        </div>
    )
}

export default Metrics;