import React, { useContext, useEffect } from 'react';

import classes from './LandingScreen.module.css';
import Header from './../../components/Header/Header';
import Marketing from './components/Marketing/Marketing';
import HumanRelations from './components/HumanRelations/HumanRelations';
import Footer from '../../components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Entrence from '../../components/Entrence/Entrence';
import { EntrenceContext } from '../../context/EntrenceScreenContext';

const LandingScreen = () => {

    return (
        <section className={classes.content}>    
            <HeroSection />
            <Marketing />
            <HumanRelations />
        </section>
    )
}

export default LandingScreen;