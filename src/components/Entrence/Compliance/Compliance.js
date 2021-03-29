import classes from './Compliance.module.css';
import React from 'react';
import DecorationOblique from '../../../assets/svg/DecorationOblique';

const Compliance = ({data}) => {

    let plusSign = 
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#46EEB2"/>
        <path d="M5 9H9M9 9V5M9 9H13M9 9V13" stroke="white" stroke-width="1.5"/>
    </svg>

    let minusSign = 
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#FF6157"/>
        <path d="M5 9H9H13" stroke="white" stroke-width="1.5"/>
    </svg>


    return (
        <div className={classes.compliance}>

            <div className={classes.compliance__header}>
                <div className={classes.compliance__header__decoration}>
                    <DecorationOblique color="#6880FF" width={43} height={45}/>
                </div>
                <div className={classes.compliance__header__title}>Compliance</div>
            </div>

            <div className={classes.compliance__content}>

                {
                    data.map((el, i) => {
                        return (
                            <div
                                key={`${i}_data_${el.sign}`} 
                                className={classes.compliance__content__item}>
                                <div className={classes.compliance__content__item__title}>{el.title}</div>

                                <div className={classes.compliance__content__item__content}>
                                    <div className={classes.sign}>{el.sign ? plusSign : minusSign}</div>
                                    <div className={classes.content}>{el.text}</div>
                                </div>
                            </div>
                        )
                    })
                }
        
            </div>
        </div>
    )
}

export default Compliance