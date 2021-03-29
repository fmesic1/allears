import React from 'react';

import classes from './HumanRelations.module.css';

import HumanResourcesCard from './../../../../components/HumanResourcesCard/HumanResourcesCard';
import ImportanceGraph from './../../../../components/ImportanceGraph/ImportanceGraph';
import DescriptionFrame from './../DescriptionFrame/DescriptionFrame';
import SimpleDescriptionFrame from './../SimpleDescriptionFrame/SimpleDescriptionFrame';
import SectionFooter from './../SectionFooter/SectionFooter';
import MeasurmentGraph from '../../../../components/MeasurmentGraph/MeasurmentGraph';
import PercentageGraphs from './components/PercentageGraphs/PercentageGraphs';
import PeopleGraphs from './components/PeopleGraphs/PeopleGraphs';

const HumanRelations = () => {

    var hr__cards = [
        {
            description: "Data display",
            number: "31,290",
            bgColor: "#FC8F66",
            middleColor: "#FD7E4E"
        },
        {
            description: "Data display",
            number: "8,730",
            bgColor: "#67C8FF",
            middleColor: "#45BBFE"
        },
        {
            description: "Data display",
            number: "11,919",
            bgColor: "#8F8FE1",
            middleColor: "#8080DF"
        }
    ]

    return (
        <section className={classes.hr}>
            <header className={classes.hr__title}>Human Resources</header>

            <div className={classes.hr__content}>
                <div className={classes.hr__content__firstRow}>

                    <div className={classes.hr__content__firstRow__cards}>
                        {hr__cards.map(function drawCard(el, i){
                            return (
                                <div className={classes.hr__content__firstRow__cards__card}
                                    key={el.number + i}>
                                    <HumanResourcesCard 
                                        description = {el.description}
                                        number = {el.number}
                                        bgColor = {el.bgColor}
                                        middleColor = {el.middleColor}/>
                                </div>     
                            )
                        })}
                        
                    </div>
                    
                    <div className={classes.hr__content__firstRow__importanceGraph}>
                        <DescriptionFrame
                            title="Importance Graphs"
                            description="Description of the graph for better understanding"
                            color_label = {[{
                                color: "#FAA745",
                                label: "HR/Team Culture"
                            },
                            {
                                color: "#8F8FE1",
                                label: "Marketing"
                            },
                            {
                                color: "#67C8FF",
                                label: "Products/Services"
                            }]}
                            showColorInfo
                            component={<ImportanceGraph />} />
                    </div>
                </div>

                <div className={classes.hr__content__secondRow}>
                    
                    <div className={classes.hr__content__secondRow__peoplesGraph}>
                        <PeopleGraphs />
                    </div>

                    <div className={classes.hr__content__secondRow__simpleGraphs}>
                        <div className={classes.hr__content__secondRow__simpleGraphs__measurmentGraphs}>
                            <div className={classes.hr__content__secondRow__simpleGraphs__measurmentGraphs__item}>
                                <SimpleDescriptionFrame
                                    title = "Measurment Graphs"
                                    description = "Description of the graph for better understanding"
                                    component = {
                                        <div className={classes.hr__content__secondRow__simpleGraphs__measurmentGraphs__item__centered}>
                                            <MeasurmentGraph number={71} maxNumber={110}/>
                                        </div>}
                                    />
                            </div>
                            <div className={classes.hr__content__secondRow__simpleGraphs__measurmentGraphs__item}>
                                <SimpleDescriptionFrame
                                    title = "Measurment Graphs"
                                    description = "Description of the graph for better understanding"
                                    component = {
                                        <div className={classes.hr__content__secondRow__simpleGraphs__measurmentGraphs__item__centered}>
                                            <MeasurmentGraph number={46} maxNumber={110}/>
                                        </div>}
                                    />
                            </div>
                        </div>

                        <PercentageGraphs />
                    </div>

                </div>
            </div>

            <SectionFooter />
        </section>
    )
}

export default HumanRelations;