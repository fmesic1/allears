import React from 'react';

import classes from './SectionFooter.module.css';
import Ig from './../../../../assets/svg/Ig';
import Mail from './../../../../assets/svg/Mail';
import Twitter from '../../../../assets/svg/twitter';

import { TwitterButton, TwitterCount, EmailButton } from "react-social";

const SectionFooter = () => {
    
    let url = "https://google.com";

    return (
        <footer className={classes.footer}>
            <div className={classes.footer__item}>
                <Ig />
            </div>
            <div className={classes.footer__item}>
                <TwitterButton url={url} style={{border: "none", background: "none"}}>
                    {/* twitter count shows how many times this button is clicked..
                    by default 1000 is free, more clicks has to be paid for */}
                    {/* <TwitterCount url={url} /> */}
                    <Twitter />
                </TwitterButton>
            </div>
            <div className={classes.footer__item}>
                <EmailButton url={url} style={{border: "none", background: "none"}}>
                    <Mail />
                </EmailButton>
            </div>
        </footer>
    )
}

export default SectionFooter;