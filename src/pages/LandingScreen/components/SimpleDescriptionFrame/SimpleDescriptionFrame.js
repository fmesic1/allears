import React from 'react';
import Button from '../../../../components/Buttons/Button';

import classes from './SimpleDescriptionFrame.module.css';

const SimpleDescriptionFrame = ({
    title="Pie Chart", 
    description = "Description for better understanding", 
    component
    }) => {

    return (
        <div className={classes.simpleFrame}>
            <header>
                <div className={classes.simpleFrame__title}>{title}</div>
                <div className={classes.simpleFrame__description}>{description}</div>
            </header>

            <div className={classes.simpleFrame__component}>
                {component}
            </div>

            <footer>
                <Button text="Score breakdown" showArrow buttonStyle={{backgroundColor: "transparent", color: "#466BEE"}}/>
            </footer>
        </div>
    )
}

export default SimpleDescriptionFrame;