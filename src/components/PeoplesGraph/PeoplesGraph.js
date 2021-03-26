import React from 'react';

import Man from '../../assets/svg/Man';
import classes from './PeoplesGraph.module.css';

const PeoplesGraph = ({number, description, woman=false}) => {

    return (
        <div className={classes.peoplesGraph}>
            <div className={classes.peoplesGraph__info}>
                <div className={classes.peoplesGraph__info__number}>{number}</div>
                <div className={classes.peoplesGraph__info__description}>{description}</div>
            </div>

            <div className={classes.peoplesGraph__peoples}>
                {[...Array(number)].map(function drawSingleMan(el){
                    return (
                        <div
                            key = {el} 
                            className = {classes.peoplesGraph__peoples__man}>
                            <Man woman={woman}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PeoplesGraph;