import React from 'react';


const pieChart = (array) => {

    array = [
        {
            description: 'Lightblue',
            percentage: 20,
            color: "yellow"
        },
        {
            description: 'Blue',
            percentage: 20,
            color: "#466BEE"
        },
        {
            description: 'Green',
            percentage: 20,
            color: "green"
        },
        {
            description: 'Number',
            percentage: 40,
            color: "#466BEE"
        }
    ]
    /* Mesic Ferhad - Poslovni covjek*/
    function editDataPercentage(array){
        //ex: array of 20 40 10 30 makes into
        // 100 80 40 30 

        array.reduce((accumulator, el, i) => {
            let svgPercentage = accumulator + el.percentage
            array[i] = {
                ...el, 
                percentageForSVG: svgPercentage,
                percentageForLabel: 360 / 100 * (accumulator + el.percentage / 2) 
            }
            return svgPercentage
        }, 0);

        return array.reverse();
    }

    var editedArray = editDataPercentage(array);


    return(
        <svg style={{width: "300px", height:"300px"}} height="20" width="20" viewBox="0 0 50 50">
            {console.log(editedArray)}
            {editedArray.map(function createStrokeAccordingToPercentage(el){
                return (
                    <circle
                        key={`${el.description}`} 
                        r="16" cx="25" cy="25"
                        fill="transparent"
                        stroke={`${el.color}`}
                        strokeWidth="4"
                        strokeDasharray={`calc(${el.percentageForSVG} * (32 * 3.1416)/100) calc(32 * 3.1416)`}
                        transform="rotate(-90) translate(-50)"/>
                )        
            })}

            {editedArray.map(function createCircleForLabel(el){
                return (
                    <circle 
                        key={`circle_${el.description}`} 
                        r="5" cx="25" cy="5"
                        fill="white"
                        transform-origin="25"
                        transform={`rotate(${el.percentageForLabel})`}/>
                )
            })}

            {editedArray.map(function createLabelInCircle(el){
                return (
                    <text
                        key={`label_${el.description}`} 
                        x="25" y="5" 
                        textAnchor="middle"
                        fontSize="1.7"
                        alignmentBaseline="central" 
                        transform-origin="25"
                        fontFamily="Gordita Medium"
                        transform={`rotate(${el.percentageForLabel})`}>
                            <tspan x="25" dy="-1">{`${el.percentage}%`}</tspan>
                            <tspan x="25" dy="2.5">{`${el.description}`}</tspan>
                    </text>
                )
            })}
        </svg>
    )
}

export default pieChart;