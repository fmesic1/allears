import React from 'react';

import classes from './DescriptionFrame.module.css';

import Dash from '../../../../assets/svg/Dash';
import Button from '../../../../components/Buttons/Button';

const DescriptionFrame = ({
    title="Pie Chart", 
    description = "Description for better understanding", 
    component,
    color_label = [{
        color: "#FAA745",
        label: "HR/Team Culture"
    },
    {
        color: "#8F8FE1",
        label: "Marketing"
    },
    {
        color: "#67C8FF",
        label: "Products/Services"
    }],
    calculationDetails = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, metus at tempus lacinia, leo massa dapibus ex, id malesuada lacus neque ac nulla. Sed viverra quis lectus at sodales. Ut luctus ante at tempor mattis. Integer non augue at velit tempus faucibus.",
    showColorInfo=false
    }) => {

    return (
        <div className={classes.frame}>

            <header className={classes.frame__header}>
                <div className={classes.frame__header__info}>
                    <div className={classes.frame__header__info__title}>{title}</div>
                    <div className={classes.frame__header__info__description}>{description}</div>
                </div>

                <Button buttonStyle={{backgroundColor: "transparent", color: "#466BEE"}}/>
            </header>

            <section className={classes.frame__content}>
                {/* Mesic Ferhad - Poslovni covjek*/}
                {component}
            </section>
            
            {showColorInfo ? 
                <footer className={classes.frame__footerColors}>
                    {color_label.map(function showColorLabel(el){
                        
                        return(
                            <div className={classes.frame__footerColors__item}
                                key={`${el.color}_${el.label}`}>

                                <span className={classes.frame__footerColors__item__circle}
                                    style={{backgroundColor: el.color}} />

                                <span className={classes.frame__footerColors__item__label}>{el.label}</span>
                            </div>
                        )
                    })}
                </footer>
                :
                <footer className={classes.frame__footerCalc}>
                    <div className={classes.frame__footerCalc__title}>
                        <span className={classes.frame__footerCalc__title__dash}> <Dash /> </span>
                        <span>Learn more about how we calculated this score</span>
                    </div>
                    <div className={classes.frame__footerCalc__content}>
                        {calculationDetails}
                    </div>
                </footer>
            }
        </div>
    )
}

export default DescriptionFrame;