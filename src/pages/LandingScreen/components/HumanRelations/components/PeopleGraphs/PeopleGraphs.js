import React from 'react';

import classes from './PeopleGraphs.module.css';

import PeoplesGraph from './../../../../../../components/PeoplesGraph/PeoplesGraph';
import DescriptionFrame from './../../../DescriptionFrame/DescriptionFrame'

const PeopleGraphs = () => {
    
    var peoplesGraphs = [{
        number: 46,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        number: 32,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        number: 28,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }]

    return (
        <div className={classes.peopleGraphs}>
            <DescriptionFrame 
                title = "Peoples Graph"
                description = "Description of the graph for better understanding"
                component=
                    {
                        <div className={classes.peopleGraphs__group}>
                            {peoplesGraphs.map(function drawPeoplesGraph(el, i){
                                return (
                                    <div key={`${el.number}_${i}`}
                                        className={classes.peopleGraphs__group__item}>
                                            <PeoplesGraph number={el.number} description={el.description} />            
                                    </div>
                                )
                        })}
                        </div>
                    }/>
        </div>
    )
}

export default PeopleGraphs;