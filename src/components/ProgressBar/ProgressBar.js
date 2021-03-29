import React, { useEffect } from 'react';

const ProgressBar = ({value, maxValue}) => {

    return (
        <svg width= "100%" height="10px" viewBox="0 0 100 20" preserveAspectRatio="none">
            {console.log(value, maxValue)}
            <rect x="0" y="0"
                width="100%"
                height="20"
                style={{fill: "#EAEDF6"}}></rect>
            
            <rect x="0" y="0"
                width={`${100 * value/maxValue}%`}
                height="20"
                style={{fill: "#466BEE"}}></rect>
        </svg>
    )
}

export default ProgressBar;