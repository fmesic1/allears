import React from 'react';

import classes from './PercentageGraphs.module.css';

import PercentageGraph from './../../../../../../components/PercentageGraph/PercentageGraph';
import DescriptionFrame from './../../../DescriptionFrame/DescriptionFrame';

const PercentageGraphs = () => {

    return (
        <DescriptionFrame 
            title = "Percentage Graphs"
            description = "Description of the graph for better understanding"
            component = {
                <div className={classes.graphs}>
                    <div className={classes.graphs__item__LIGHTBLUE}>
                        <PercentageGraph color="#44C6E2" description="Something" percentage={67}/>
                    </div>
                    <div className={classes.graphs__item__ORANGE}>
                        <PercentageGraph color= "#FAA745" description="Something" percentage={85}/>
                    </div>
                    <div className={classes.graphs__item__PURPLE}>
                        <PercentageGraph color= "#8382DE" description="Something" percentage={42} opacity= {0.9}/>
                    </div>
                </div>
            }
            calculationDetails = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, metus at tempus lacinia, leo massa dapibus ex, id malesuada lacus neque ac nulla. Sed viverra quis lectus at sodales. Ut luctus ante at tempor mattis. Integer non augue at velit tempus faucibus."
            />
    )
}

export default PercentageGraphs;