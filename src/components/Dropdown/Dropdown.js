import React, { useState } from 'react';

import Decoration from './../../assets/svg/DecorationOblique';
import classes from './Dropdown.module.css';

const Dropdown = ({title="Marketing", decorationColor="#FFFFFF", details=[]}) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={classes.dropdown}>

            <div className={classes.dropdown__toggle} onClick={() => setToggle(!toggle)}>
                <span className={classes.dropdown__toggle__title}>
                    {title}
                    <span className={classes.dropdown__toggle__title__decoration}>
                        <Decoration color={decorationColor}/>
                    </span>
                </span>
                <span className={classes.dropdown__toggle__caret}></span>
            </div>

            {
                toggle ? 
                <div className={classes.dropdown__content}>
                    {details.map(function writeContentDescription(el, i){
                        return (
                            <div
                                key={`${el.what}_${el.when}_${i}`} 
                                className={classes.dropdown__content__item}>

                                <div className={classes.dropdown__content__item__whatSection}>
                                    <div className={classes.dropdown__content__item__label}>WHAT</div>
                                    <div className={classes.dropdown__content__item__text}>{el.what}</div>
                                </div>
                                
                                <div className={classes.dropdown__content__item__whenSection}>
                                    <div className={classes.dropdown__content__item__label}>WHEN</div>
                                    <div className={classes.dropdown__content__item__text}>{el.when}</div>
                                </div>
                                
                                <div className={classes.dropdown__content__item__description}>
                                    {el.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                null
            }
        </div>
    )
}

export default Dropdown;