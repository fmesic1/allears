import React, { useState } from 'react'; 
import {Link} from 'react-router-dom';

import Gordita from './../../assets/fonts/Gordita-Regular.woff';

import classes from './Header.module.css';
import Logo from './../../assets/img/Logo.png';
import Button from './../Buttons/Button';
import ActiveNavLinkDecoration from './../../assets/svg/activeNavLinkDecoration';

const Header = ({match}) => {

    var availableLinks = ["/", "/scorebreakdown", "/initiatives"]

    let link = window.location.pathname;

    if(!availableLinks.includes(link))
        link = "/"

    const [activeLink, setActiveLink] = useState(link);

    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                <div className={classes.header__nav__link} onClick={() => setActiveLink("/")}>
                    <div className={classes.header__nav__link__item}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}> Dashboard</Link>

                        {
                            activeLink == "/" ?
                            <div className={classes.header__nav__link__item__ACTIVE}>
                                <ActiveNavLinkDecoration width={68}/>
                            </div>
                            :
                            null
                        }
                    </div>
                    
                </div>
                <div className={classes.header__nav__link} onClick={() => setActiveLink("/scorebreakdown")}>
                    <div className={classes.header__nav__link__item}>
                        <Link to="/scorebreakdown" style={{ color: 'inherit', textDecoration: 'inherit'}}>Score Breakdown</Link>
                        {
                            activeLink == "/scorebreakdown" ?
                            <div className={classes.header__nav__link__item__ACTIVE}>
                                <ActiveNavLinkDecoration width={110}/>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
                <div className={classes.header__nav__link} onClick={() => setActiveLink("/initiatives")}>
                    <div className={classes.header__nav__link__item}>
                        <Link to="/initiatives" style={{ color: 'inherit', textDecoration: 'inherit'}}>Initiatives</Link>
                        {
                            activeLink == "/initiatives" ?
                            <div className={classes.header__nav__link__item__ACTIVE}>
                                <ActiveNavLinkDecoration width={60}/>
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </nav>

            <figure className={classes.header__logo}>
                <img src={Logo} alt="The Kite Factory" />
            </figure>


            {/*cta - call to action*/}
            <div className={classes.header__evaluationCta}>
                <div className={classes.header__evaluationCta__poweredBy}>POWERED BY ALL EARS</div>
                <Button text="Request evaluation" buttonStyle={{backgroundColor:"#000000", color: "#FFFFFF"}} />
            </div>
        </header>
    )
}

export default Header;