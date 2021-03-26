import React from 'react';

const DecorationOblique = ({color = "#F97F6E"}) => {

    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 7.30769C18 12.5544 16.56 19 9.36 19C4.19061 19 0 14.7467 0 9.5C0 4.25329 1.31061 0 6.48 0C11.6494 0 18 2.06099 18 7.30769Z" 
                fill={`${color}`}/>
        </svg>
    )
}

export default DecorationOblique;