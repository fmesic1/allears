import React from 'react';

import classes from './HumanResourcesCard.module.css';
import BarChart from '../../assets/svg/BarChart';

const HumanResourcesCard = ({bgColor, middleColor, description, number, footnote=""}) => {

    return (
        <div className={classes.hrCard} style={{backgroundColor: bgColor}}>
            <div className={classes.hrCard__content}>

                <div className={classes.hrCard__content__barChart} style={{backgroundColor: middleColor}}>    
                    <BarChart />
                </div>
                
                <div className={classes.hrCard__content__info}>
                    <div className={classes.hrCard__content__info__description}>{description}</div>
                    <div className={classes.hrCard__content__info__number}>{number}</div>
                    {
                        footnote != "" ?
                        <div className={classes.hrCard__content__info__footnote}>{footnote}</div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default HumanResourcesCard;