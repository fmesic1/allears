import React from 'react';

const PieChartComplex = ({array = []}) => {
    
    array = [
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
    ]
    /*
    array = [
        {
            description: 'Coral',
            percentage: 5,
            color: "#FAA745",
            emphasized: "true"
        },
        {
            description: 'Grey',
            percentage: 20,
            color: "grey",
            emphasized: "true"
        },
        {
            description: 'Indigo',
            percentage: 15,
            color: "#8F8FE1"
        },
        {
            description: 'Red',
            percentage: 30,
            color: "red",
            emphasized: "true"
        },
        {
            description: 'SeaGreen',
            percentage: 30,
            color: "#67C8FF"
        }
    ]
    */
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

    function coordinateForLabel(percentage){
        if(percentage >= 0 && percentage < 90)
            return {
                x: 18 - Math.sin(percentage),
                y: 18* Math.cos(63) - 6.5
            }
        else if(percentage >= 90 && percentage < 180)
            return {
                x: 2,
                y: 7
            }
    }

    return (
        <svg style={{width: "300px", height: "300px"}} height="20" width="20" viewBox="0 0 50 50">
            {/* Mesic Ferhad - Poslovni covjek*/}
            {editedArray.map(function createStrokeAccordingToPercentage(el){
                return (
                    <circle
                        key={`${el.description}`} 
                        r="17" cx="25" cy="25"
                        fill="transparent"
                        stroke={`${el.color}`}
                        strokeWidth="4"
                        strokeDasharray={`calc(${el.percentageForSVG} * (34 * 3.1416)/100) calc(34 * 3.1416)`}
                        transform="rotate(-90) translate(-50)"/>
                )        
            })}

            {editedArray.map(function createPieForEmphasized(el){
                return ( 
                    <g key={`emphasized_${el.description}`}>
                        <circle
                            r="9" cx="25" cy="25"
                            fill="transparent"
                            stroke={el.emphasized ? el.color : "white"}
                            strokeOpacity={el.emphasized ? "0.3" : "1"}
                            strokeWidth="18"
                            strokeDasharray={`calc(${el.percentageForSVG} * (18 * 3.1416)/100) calc(18 * 3.1416)`}
                            transform="rotate(-90) translate(-50)"/>
                        {/* Funkcija kruga ispod je da restartuje pozadinu na bijelo tako da se izbjegne preklapanje boja */}
                        <circle
                            r="9" cx="25" cy="25"
                            fill="transparent"
                            stroke={"white"}
                            strokeOpacity={el.emphasized ? "0.3" : "1"}
                            strokeWidth="18"
                            strokeDasharray={`calc(${el.percentageForSVG} * (18 * 3.1416)/100) calc(18 * 3.1416)`}
                            transform="rotate(-90) translate(-50)"/>
                    </g>
                )
            })}
            {editedArray.map(function createCircleForLabel(el,i){
                return (
                    <circle 
                        id={`circle_${el.description}`}
                        key={`circle_${el.description}`} 
                        r="5" cx="25" cy="5"
                        fill={el.emphasized ? "#090909" : "white"}
                        transform-origin="25"
                        transform={`rotate(${el.percentageForLabel})`}/>
                )
            })
            }

            {editedArray.map(function createLabelInCircle(el){
                return (
                    <text
                        key={`label_${el.description}`} 
                        x="25" y="5" 
                        textAnchor="middle"
                        fill={el.emphasized ? "white" : "#3F5695"}
                        fontSize="1.7"
                        alignmentBaseline="central" 
                        transform-origin="25"
                        fontFamily="Gordita"
                        transform={`rotate(${0})
                        translate(${18 - Math.sin(63)}, ${8 + (18 - 18 * Math.cos(63))})`}>
                            <tspan x="25" dy="-1">{`${el.percentage}%`}</tspan>
                            <tspan x="25" dy="2.5">{`${el.description}`}</tspan>
                    	</text>
                )
            })}
        </svg>
    )

}

export default PieChartComplex;