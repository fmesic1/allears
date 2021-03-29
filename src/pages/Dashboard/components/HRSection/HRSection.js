import classes from './HRSection.module.css';
import React from 'react';

import DescriptionFrame from './../../../LandingScreen/components/DescriptionFrame/DescriptionFrame'
import PeoplesGraph from './../../../../components/PeoplesGraph/PeoplesGraph'

const HRSection = () => {

    return (
        <div className={classes.hr}>
            <div className={classes.hr__title}>HR</div>
            <div className={classes.hr__content}>
                <div className={classes.hr__content__item}>
                    <DescriptionFrame 
                        title="People graphs"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.peopleGraph}>
                                <div className={classes.peopleGraph__item}>
                                    <PeoplesGraph 
                                        number={48}
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                </div>
                                <div className={classes.peopleGraph__item}>
                                    <PeoplesGraph 
                                        number={11}
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        woman="true"/>
                                </div>
                            </div>
                        }/>
                </div>
                <div className={classes.hr__content__item}>
                    <DescriptionFrame 
                        title="People graphs"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.peopleGraph}>
                                <div className={classes.peopleGraph__item}>
                                    <PeoplesGraph 
                                        number={48}
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                </div>
                                <div className={classes.peopleGraph__item}>
                                    <PeoplesGraph 
                                        number={11}
                                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        woman="true"/>
                                </div>
                            </div>
                        }/>
                </div>
            </div>
        </div>
    )
}

export default HRSection;