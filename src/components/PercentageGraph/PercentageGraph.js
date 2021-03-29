import React from 'react';

const PercentageGraph = ({color="teal", description="Default info", percentage=100, opacity=1}) => {

    return (
        <svg width="100%" viewBox="0 0 50 50">
            <circle
                r="24.5" cx="25" cy="25"
                fill="transparent"
                stroke={color}
                strokeWidth="0.5"
                strokeDasharray={`calc(${percentage} * (49 * 3.1416)/100) calc(49 * 3.1416)`}
                transform="rotate(-90) translate(-50)"/>
            <circle
                r="23" cx="25" cy="25"
                fill={color}
                opacity={opacity}/>
            <text
                x="25" y="27" 
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Gordita">
                    {/* Interesantno je da za fontSize=20 y mora biti 27
                    za fontSize=30 y mora biti 28
                    za fontSize=10 y mora biti 26
                    da bi bilo centrirano... svasta, why ?*/}
                    {/* {`${percentage}%`} */}
                    <tspan x="25" dy="-4" fontSize="10">{`${percentage}%`}</tspan>
                    <tspan x="25" dy="8" fontSize="4">{`${description}`}</tspan>
            </text>
        </svg>
    )
}

export default PercentageGraph;