import React, {useEffect} from 'react';

import classes from './Dashboard.module.css';
import HRSection from './components/HRSection/HRSection'
import PercentageGraph from './../../components/PercentageGraph/PercentageGraph';
import PieChartComplex from './../../components/PieChartComplex/PieChartComplex';
import DescriptionFrame from '../LandingScreen/components/DescriptionFrame/DescriptionFrame';
import ComparisonGraph from '../../components/ComparisonGraph/ComparisonGraph';
import HumanResourcesCard from './../../components/HumanResourcesCard/HumanResourcesCard';
import PieChartComplexDummyGraph, { PieChartComplexDummyGraph1, PieChartComplexDummyGraph2 } from '../../components/PieChartComplex/PieChartComplexDummyGraph';
import SectionFooter from '../LandingScreen/components/SectionFooter/SectionFooter';

const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div style={{display: "flex", flexDirection: "column", paddingLeft:"84px", paddingRight: "84px", backgroundColor: "#FAFBFB"}}>
            <HRSection />
            
            <div className={classes.percentageGraphs}>
                <div className={classes.percentageGraphs__item}>
                    <DescriptionFrame
                        title="Ethnicity SLT"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.pg}>
                                <div className={classes.pg__graph__ORANGE}>
                                    <PercentageGraph
                                        color= "#FAA745"
                                        description= "White"/>
                                </div>
                                <div className={classes.pg__graph__PURPLE}>
                                    <PercentageGraph
                                        percentage = {0}
                                        color= "#8382DE"
                                        description= "Ethnicity"/>
                                </div>
                            </div>
                        } />
                </div>
                <div className={classes.percentageGraphs__item}>
                    <DescriptionFrame
                        title="Gender SLT"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.pg}>
                                <div className={classes.pg__graph__pieChart}>
                                    <PieChartComplexDummyGraph1 />
                                </div>
                            </div>
                        } />
                </div>
                <div className={classes.percentageGraphs__item}>
                    <DescriptionFrame
                        title="Ethnicity Board"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.pg}>
                                <div className={classes.pg__graph__ORANGE}>
                                    <PercentageGraph
                                        color= "#FAA745"
                                        description= "White"/>
                                </div>
                                <div className={classes.pg__graph__PURPLE}>
                                    <PercentageGraph
                                        percentage = {0}
                                        color= "#8382DE"
                                        description= "Ethnicity"/>
                                </div>
                            </div>
                        } />
                </div>
                <div className={classes.percentageGraphs__item}>
                    <DescriptionFrame
                        title="Gender Board"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.pg}>
                                <div className={classes.pg__graph__pieChart}>
                                    <PieChartComplexDummyGraph2 />
                                </div>
                            </div>
                        } />
                </div>
            </div>

            <div className={classes.comparisonGraphs}>
                <div className={classes.comparisonGraphs__item}>
                    <DescriptionFrame
                        title="Team Comparison Graph"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.comparisonGraph}>
                                <ComparisonGraph
                                    array={[
                                        {
                                            data: [15, 22.9],
                                            colors:["#656C82", "#72EE46"],
                                            label: "IPA Ethnic Diversity"
                                        },
                                        {
                                            data:[]
                                        },
                                        {
                                            data:[]
                                        },
                                        {
                                            data: [52.6, 45.9],
                                            colors: ["#656C82", "#EE5A46"],
                                            label: "IPA Agency Census Women"
                                        }
                                    ]}
                                    maxValue={100}/>
                            </div>
                        } />
                </div>
                <div className={classes.comparisonGraphs__item__scoreCards}>
                    <div className={classes.comparisonGraphs__item__scoreCards__card}>
                        <HumanResourcesCard 
                            bgColor="#67C8FF"
                            middleColor="#45BBFE"
                            description="Ethnicitiy"
                            number="52%"
                            footnote="Better than IPA standard"/>
                    </div>
                    <div className={classes.comparisonGraphs__item__scoreCards__card}>
                        <HumanResourcesCard 
                            bgColor="#8F8FE1"
                            middleColor="#8080DF"
                            description="Gender"
                            number="12.73%"
                            footnote="Below than IPA standard"/>
                    </div>
                </div>
                <div className={classes.comparisonGraphs__item}>
                    <DescriptionFrame
                        title="SLT Comparison Graph"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.comparisonGraph}>
                                <ComparisonGraph
                                    array={[
                                        {
                                            data: [34, 17],
                                            colors:["#656C82", "#EE5A46"],
                                            label: "IPA Ethnic Diversity"
                                        },
                                        {
                                            data:[]
                                        },
                                        {
                                            data:[]
                                        },
                                        {
                                            data: [4.7, 0],
                                            colors: ["#656C82", "#EE5A46"],
                                            label: "IPA Agency Census Women"
                                        }
                                    ]}
                                    maxValue={50}/>
                            </div>
                        } />
                </div>
                <div className={classes.comparisonGraphs__item__scoreCards}>
                    <div className={classes.comparisonGraphs__item__scoreCards__card}>
                        <HumanResourcesCard 
                            bgColor="#67C8FF"
                            middleColor="#45BBFE"
                            description="Ethnicitiy"
                            number="50%"
                            footnote="Better than IPA standard"/>
                    </div>
                    <div className={classes.comparisonGraphs__item__scoreCards__card}>
                        <HumanResourcesCard 
                            bgColor="#8F8FE1"
                            middleColor="#8080DF"
                            description="Gender"
                            number="100%"
                            footnote="Below than IPA standard"/>
                    </div>
                </div>
                <div className={classes.comparisonGraphs__item}>
                    <DescriptionFrame
                        title="Board Comparison Graph"
                        description="Description of the graph for better understanding"
                        component={
                            <div className={classes.comparisonGraph}>
                                <ComparisonGraph
                                    array={[{
                                        data: [4, 0],
                                        colors: ["#656C82", "#EE5A46"],
                                        label: "IPA Ethnic Diversity"
                                    },
                                    {
                                        data:[]
                                    },
                                    {
                                        data:[]
                                    },
                                    {
                                       data: [22.7, 0],
                                       colors: ["#656C82", "#EE5A46"],
                                       label: "IPA Agency Census Women"
                                    }]}
                                    maxValue={50}/>
                            </div>
                        } />
                </div>
                <div className={classes.comparisonGraphs__item__scoreCards}>
                    <div className={classes.comparisonGraphs__item__scoreCards__card}>
                        <HumanResourcesCard 
                            bgColor="#67C8FF"
                            middleColor="#45BBFE"
                            description="Ethnicitiy"
                            number="50%"
                            footnote="Better than IPA standard"/>
                    </div>
                    <div className={classes.comparisonGraphs__item__scoreCards__card}>
                        <HumanResourcesCard 
                            bgColor="#8F8FE1"
                            middleColor="#8080DF"
                            description="Gender"
                            number="100%"
                            footnote="Below than IPA standard"/>
                    </div>
                </div>
            </div>
            <SectionFooter />
        </div>
    )
}

export default Dashboard