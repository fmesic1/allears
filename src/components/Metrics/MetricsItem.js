import classes from './MetricsItem.module.css';
import React from 'react';

const MetricsItem = ({label, lineColor="#4B5A87", scoreRange, emphasized="false"}) => {

    let textColor = emphasized ? "#FFFFFF" : "#4B5A87" 
    let line = emphasized ? lineColor : "#4B5A87"

    return (
        <div className={classes.metricsItem}>
            <div className={classes.metricsItem__label} style={{color: textColor}}>{label}</div>
            <div className={classes.metricsItem__colorLine} style={{backgroundColor: line}}></div>
            <div className={classes.metricsItem__score} style={{color: textColor}}>{scoreRange}</div>
        </div>
    )
}

export default MetricsItem