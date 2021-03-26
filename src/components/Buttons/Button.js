import React from 'react';

import classes from './Button.module.css';

const Button = ({
    text = "Score breakdown",
    showArrow = true,
    buttonStyle,
    onClick
    }) => {

    return (
        <button className={classes.button} style={buttonStyle} onClick={onClick}>
            <div className={classes.button__content}>
                <div className={classes.button__content__text}>{text}</div>
                {showArrow ? <div className={classes.button__content__arrow}></div> : null}
            </div>
        </button>
    )
}

export default Button;