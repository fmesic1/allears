import React from 'react';

const LineGraph = (coordinatesArray, lineDensity) => {
    /* Mesic Ferhad - Poslovni covjek*/
    lineDensity = 5
    /*ugl hardkodirao sam niz za prikaz info jer keno nije specificirao dalje projekat... */
    coordinatesArray = [
        {
            x: 0,
            y: 50
        },
        {
            x: 25,
            y: 25
        },
        {
            x: 40,
            y: 5
        },
        {
            x: 20,
            y: 20
        },
        {
            x: 15,
            y: 45
        },
        {
            x: 15,
            y: 85
        },
        {
            x: 10,
            y: 200
        },
        {
            x: 5,
            y: 5
        }
    ]

    function sortAscendingCoordinateX(array){
        return array.sort(function sortingRule(a, b){
            return a.x - b.x
        });
    }

    var sortedCoordinatesArray = sortAscendingCoordinateX(coordinatesArray);
    
    var maximumNumberX = sortedCoordinatesArray[sortedCoordinatesArray.length - 1].x;

    var maximumNumberY = sortedCoordinatesArray.reduce(function findMaximumY(acc, el){
        if(el.y > acc)
            return el.y
        return acc
    }, sortedCoordinatesArray[0].y);

    return (
        <svg width="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
            {console.log(sortedCoordinatesArray)}
            {[...Array(lineDensity).keys()].map(function drawHorizontalLineBehindCurveAndHeightLabel(el){
                return(
                    <g key={el}>
                        <text
                            x="7" y={`${10 + el * 80 / (lineDensity-1)}`}
                            alignmentBaseline="middle"
                            textAnchor="end"
                            fontSize={lineDensity > 20 ? "2" : "3"}
                            fontFamily="Gordita Medium">
                                {`${Math.floor(maximumNumberY - el / (lineDensity - 1) * maximumNumberY)}`}
                        </text>

                        <path stroke="#EAEBEE" strokeWidth="0.2" d={`M10 ${10 + el * 80 / (lineDensity-1)} H200`}/>
                    </g>
                )
            })}
            {/* Mesic Ferhad - Poslovni covjek*/}
            { 
                sortedCoordinatesArray.map(function drawLinearLineForFunction(startingPoint, i, thisArray){
                    let endingPoint = i+1 < thisArray.length ? thisArray[i+1] : thisArray[i];
                    return (
                        <line 
                            key={`linear_line_${i}`}
                            /* Formulas for mapping coordinates on svg */
                            x1={10 + startingPoint.x / maximumNumberX * 180}
                            y1={10 + (80 - startingPoint.y / maximumNumberY * 80)}
                            x2={10 + endingPoint.x / maximumNumberX * 180}
                            y2={10 + (80 - endingPoint.y / maximumNumberY * 80)}
                            stroke="#466BEE"
                            strokeWidth="1" />
                    )
                })
            }
            {
                [...Array(lineDensity).keys()].map(function drawLabelsForCoordinatesX(el){
                    return (
                        <text
                            key={`label_for_x_${el}`}
                            x={`${10 + el * 180 / (lineDensity-1)}`} y="97"
                            textAnchor="middle"
                            fontSize={lineDensity > 20 ? "2" : "3"}
                            fontFamily="Gordita Medium">
                                {`${maximumNumberX - Math.floor(maximumNumberX - el / (lineDensity - 1) * maximumNumberX)}`}
                        </text>
                    )
                })
            }
        </svg>
    )
}

export default LineGraph;