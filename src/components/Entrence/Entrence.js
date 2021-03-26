import React, { useContext, useEffect, useState } from 'react';
import {CSSTransition} from 'react-transition-group';

import ColorfulCircle from '../../assets/svg/ColorfulCircle';
import LogoWhite from './../../assets/img/LogoWhite.png';
import Button from './../Buttons/Button';

import useWindowDimensions from './../../hooks/useWindowDimensions';
import {EntrenceContext} from './../../context/EntrenceScreenContext';
import classes from './Entrence.module.css';

const Entrence = ({setToSeen}) => {

    var [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
    var [showInfoScreen, setShowInfoScreen] = useState(false);

    var {setToSeen} = useContext(EntrenceContext);
    const { height } = useWindowDimensions();


    return (
        <div id="entrence" className={classes.entrence}>
            <header><img src={LogoWhite} alt="The Kite Factory Logo" /></header>
            <section className={classes.content}>

                {/* in = boolean - true: ulazi u fazu appear, false - ulazi u fazu exit*/}
                {/* timeout={2000} postavlja isti timeout i za appear i za exit a ako su nam animacije u css
                postavljene na razlicite duzine trajanja moze se koristiti timeout={{exit: 2000, appear: 3000}}*/}
                {/* unmountOnExit mora se postaviti na true da bi komponenta kada se zavrsi exit animacija nestala sa screena */}
                {/* onExited - kada nestane sta se uradi ? postavi se showWelcomeScreen na false,
                zbog promjene state-a rerenderuje se komponenta i onda pogleda in={false} i nece je prikazati, ide dalje..*/}
                {/* appear={true} - by default appear animations are "disabled" and to enable them back we must put this line*/}
                
                <CSSTransition
                    in={showWelcomeScreen}
                    timeout={1250}
                    classNames={{
                        appear: classes.content__center__animation__appear,
                        appearActive: classes.content__center__animation__appear__ACTIVE,
                        exit: classes.content__center__animation__exit,
                        exitActive: classes.content__center__animation__exit__ACTIVE
                    }}
                    unmountOnExit={true}
                    appear={true}
                    onEntered={setTimeout(() => setShowWelcomeScreen(false), 1250)}
                    onExited={() => setShowInfoScreen(true)}>
                    
                        <div className={classes.content__center}>
                            <div className={classes.content__center__hello}>Hello Kite Factory...</div>
                            <div className={classes.content__center__welcome}>Welcome to your Inclusion and Belonging Journey</div>
                        </div>
        
                </CSSTransition>
                
                <div onClick={setToSeen} onScrollCapture={setToSeen} onScroll={setToSeen}>
                <CSSTransition
                    in={showInfoScreen}
                    timeout={1000}
                    classNames={{
                        appear: classes.content__center__animation__appear,
                        appearActive: classes.content__center__animation__appear__ACTIVE
                    }}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    appear={true}>

                        <div id="content_center" className={classes.content__center} 
                            style={{marginTop : height > 800 ? `6px` : `14px`}}>

                            <ColorfulCircle height = {height}/>
                            <div className={classes.content__center__button}>
                                <Button text="Our mission" showArrow buttonStyle={{backgroundColor: "#212A47", border: "none", color: "white"}}/>
                            </div>
                            <div className={classes.content__center__maturityIndex} 
                                style={{top: height > 800 ? `calc(50% - 68px)` : `calc(50% - 74px)`}}>
                                Your Inclusion <br/>
                                Maturity Index
                            </div>
                        </div>

                </CSSTransition>
                </div>


                {/* {showWelcomeScreen & 
                <div className={classes.content__center}>
                    <div className={classes.content__center__hello}>Hello Kite Factory...</div>
                    <div className={classes.content__center__welcome}>Welcome to your Inclusion and Belonging Journey</div>
                </div>
                }

                {!showWelcomeScreen &
                <div id="content_center" className={classes.content__center} 
                    style={{marginTop : height > 800 ? `6px` : `14px`}}>
                    <ColorfulCircle height = {height}/>
                    <div className={classes.content__center__button}>
                        <Button text="Our mission" showArrow buttonStyle={{backgroundColor: "#212A47", border: "none", color: "white"}}/>
                    </div>
                    <div className={classes.content__center__maturityIndex} 
                        style={{top: height > 800 ? `calc(50% - 68px)` : `calc(50% - 74px)`}}>
                        Your Inclusion <br/>
                        Maturity Index
                    </div>
                </div>
                } */}
            </section>
        </div>
    )
}

export default Entrence;