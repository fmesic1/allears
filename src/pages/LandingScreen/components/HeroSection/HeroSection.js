import React from 'react';
import SectionFooter from '../SectionFooter/SectionFooter';

import manImg from './../../../../assets/img/manImg.png';
import womanImg from './../../../../assets/img/womanImg.png';
import peopleImg from './../../../../assets/img/peopleImg.png';

import SignatureJamesSmith from './../../../../assets/svg/signatureJamesSmith';

import classes from './HeroSection.module.css';

const HeroSection = () => {

    return (
        <section className={classes.hero}>
            <div className={classes.hero__content}>
                <div className={classes.hero__content__title}>The Kite Factory</div>
                <div className={classes.hero__content__subtitle}>2025 Vision</div>


                <div className={classes.hero__content__figures}>
                    <figure className={classes.hero__content__figure1}>
                        <img src={manImg} alt="man image"/>
                        <figcaption>
                            <div className={classes.hero__content__figure1__div}>
                                <div className={classes.apostrophe}>“</div>
                                <div className={classes.hero__content__figureX__div__text}>We believe in inclusion and what it’s impact to our business strategy</div>
                                <div className={classes.signature}><SignatureJamesSmith /></div>

                                <div className={classes.hero__content__figure1__div__blueBallOne}></div>
                            </div>
                        </figcaption>
                    </figure>
                    
                    <figure className={classes.hero__content__figure2}>
                        <img src={peopleImg} alt="people image"/>
                        <figcaption>
                            <div className={classes.hero__content__figure2__div}>
                                <div className={classes.hero__content__figureX__div__text}>
                                    At least half of our global workforce will be women
                                </div>

                                <div className={classes.hero__content__figure2__div__blueBallTwo}></div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure className={classes.hero__content__figure3}>
                        <img src={womanImg} alt="woman image"/>
                        <figcaption>
                            <div className={classes.hero__content__figure3__div}>
                                <div className={classes.hero__content__figureX__div__text}>
                                    At least a quarter of our UK workforce will be under-represented minorities
                                </div>
                            </div>
                        </figcaption>
                    </figure>

                </div>
            </div>
            <SectionFooter />
        </section>
    )
}

export default HeroSection;