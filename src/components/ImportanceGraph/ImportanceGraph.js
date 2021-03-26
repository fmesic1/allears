import React from 'react';

import classes from './ImportanceGraph.module.css';

const ImportanceGraph = () => {     

    return (
        <div className={classes.impGraph}>
            <div className={`${classes.impGraph__circle__LIGHTBLUE} ${classes.impGraph__circle}`}>
                <div className={classes.impGraph__circle__text}>
                    Creating <br/> sustainable <br/> products
                </div>
            </div>

            <div className={`${classes.impGraph__circle__ORANGE__BIG} ${classes.impGraph__circle}`}>
                <div className={classes.impGraph__circle__text}>
                   Making your website <br /> accessable to all
                </div>
            </div>

            <div className={`${classes.impGraph__circle__PURPLE__BIG}  ${classes.impGraph__circle}`}>
                <div className={classes.impGraph__circle__text}>
                    Creating <br/> inclusive ad <br/> campaigns
                </div>
            </div>

            <div className={`${classes.impGraph__circle__ORANGE__SMALL} ${classes.impGraph__circle}`}>
                <div className={classes.impGraph__circle__text}>
                    Diverse workforce
                </div>
            </div>

            <div className={classes.impGraph__circle__PURPLE__SMALL} >
            </div>

            <div className={classes.impGraph__circle__LIGHTBLUE__SMALL}>
            </div>
        </div>
    )
}

export default ImportanceGraph;