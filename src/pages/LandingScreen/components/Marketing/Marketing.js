import React from 'react';

import classes from './Marketing.module.css';

import ComparisonGraph from './../../../../components/ComparisonGraph/ComparisonGraph';
import PieChartComplex from './../../../../components/PieChartComplex/PieChartComplex';
import LineGraph from './../../../../components/LineGraph/LineGraph';
import DescriptionFrame from './../DescriptionFrame/DescriptionFrame';
import SectionFooter from './../SectionFooter/SectionFooter';

const Marketing = () => {

    var section__Marketing__items = [
        {
            component: <PieChartComplex array={[
                {
                    description: 'Latina',
                    percentage: 35,
                    color: "#FAA745",
                    emphasized: "true"
                },
                {
                    description: "Native Hawaian",
                    percentage: 35,
                    color: "#8F8FE1"
                },
                {
                    description: "Asian",
                    percentage: 30,
                    color: "#67C8FF"
                }
            ]}/>,
            title: "Pie Charts",
            description: "Description of the graph for better understanding",
            calculationDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, metus at tempus lacinia, leo massa dapibus ex, id malesuada lacus neque ac nulla. Sed viverra quis lectus at sodales. Ut luctus ante at tempor mattis. Integer non augue at velit tempus faucibus."
        },
        {
            component: <PieChartComplex />,
            title: "Pie Charts",
            description: "Description of the graph for better understanding",
            calculationDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, metus at tempus lacinia, leo massa dapibus ex, id malesuada lacus neque ac nulla. Sed viverra quis lectus at sodales. Ut luctus ante at tempor mattis. Integer non augue at velit tempus faucibus."
        },
        {
            component: <LineGraph />,
            title: "Line Graphs",
            description: "Description of the graph for better understanding",
            calculationDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, metus at tempus lacinia, leo massa dapibus ex, id malesuada lacus neque ac nulla. Sed viverra quis lectus at sodales. Ut luctus ante at tempor mattis. Integer non augue at velit tempus faucibus."
        },
        {
            component: <ComparisonGraph />,
            title: "Comparison Graph",
            description: "Description of the graph for better understanding",
            calculationDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, metus at tempus lacinia, leo massa dapibus ex, id malesuada lacus neque ac nulla. Sed viverra quis lectus at sodales. Ut luctus ante at tempor mattis. Integer non augue at velit tempus faucibus."
        }
    ]

    return (
        <section className={classes.marketing}>
            <header className={classes.marketing__title}>Marketing</header>

            <div className={classes.marketing__content}>
                {section__Marketing__items.map(function graphInDescriptionFrame(el, i){
                    let frameClass = classes.marketing__content__chart;
                    if(i > 1)
                        frameClass = classes.marketing__content__graph;
                    return ( 
                        <div className={classes.marketing__content__item}
                            key = {`${el.title}_${i}`}>
                            <DescriptionFrame
                                title={el.title}
                                description={el.description}
                                calculationDetails={el.calculationDetails}
                                component={
                                    <div className={frameClass}>
                                        {el.component}
                                    </div>
                                }/>
                        </div>
                    )
                })}
            </div>

            <SectionFooter />
        </section>
    )
}

export default Marketing;