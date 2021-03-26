import React from 'react';

import Allears from '../../assets/svg/allears';
import classes from './Footer.module.css';

const Footer = ({bgColor="white"}) => {

    return (
        <footer className={classes.footer} style={{backgroundColor: `${bgColor}`}}>
            <Allears />
        </footer>
    )
}

export default Footer;