import React from 'react';

const MeasurmentGraph = ({number, numberColor="#466BEE", maxNumber, maxNumberColor="#F0F1F2"}) => {
    /*
    object = {
        number: 80,
        numberColor: "#466BEE",
        maxNumber: 130,
        maxNumberColor: "#F0F1F2"
    }*/

    return(
        <svg style={{width: "100%", height:"100%"}} height="20" width="20" viewBox="0 0 50 50">    
            <circle
                r="23" cx="25" cy="25"
                fill="transparent"
                stroke={maxNumberColor}
                strokeWidth="4"
                strokeDasharray={`calc(46 * 3.1416)`}
                transform="rotate(-90) translate(-50)"/>
            <circle
                r="23" cx="25" cy="25"
                fill="transparent"
                stroke={numberColor}
                strokeWidth="4"
                strokeDasharray={`calc( ${number} * 100 / ${maxNumber} * (46 * 3.1416) / 100) calc(46 * 3.1416)`}
                transform="rotate(-90) translate(-50)"/>  
            <text
                x="25" y="27" 
                textAnchor="middle"
                fontSize="17"
                fill="#363941"
                dominantBaseline="middle"
                fontFamily="Gordita Medium">
                    {/* Interesantno je da za fontSize=20 y mora biti 27
                    za fontSize=30 y mora biti 28
                    za fontSize=10 y mora biti 26
                    da bi bilo centrirano... svasta, why ?*/}
                    {number}
            </text>
        </svg>
    )
}

export default MeasurmentGraph;