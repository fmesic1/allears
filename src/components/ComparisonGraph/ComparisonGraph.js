import React from 'react';

const ComparisonGraph = ({array=[], lineDensity, maxValue, percentage=true}) => {
    lineDensity = 5

    /*
    array = [
        {
            data: [18, 22.9],
            label: "IPA Ethnic Diversity"
        },
        {
            data: [52.6, 45.9],
            label: "IPA Agency Census Women"
        }
    ]
    */

    array.map(function setEmptyArrayOfColorsIfColorsAreNotProvided(el){
        if(!el.colors)
            el.colors = []    
    })

    const svgViewBoxWidth = 200;
    const svgViewBoxHeight = 100;

    var totalNumberOfComparisonBars = array.reduce(function numberOfBarsInGroup(acc, comparisonGroup){
        return acc + comparisonGroup.data.length; 
    }, 0);

    var averageNumberOfComparisonBarsPerGroup = totalNumberOfComparisonBars / array.length;

    var comparisonGroupsWidth = array.reduce(function calculateWidthForOneComparisonGroup(acc, comparisonGroup){
        let spaceBetweenTwoConsecutiveBars = 1 / 3;
        let numberOfBars = comparisonGroup.data.length;
        let numberOfSpacesBetweenBars = numberOfBars - 1;
        return acc + numberOfBars + numberOfSpacesBetweenBars * spaceBetweenTwoConsecutiveBars;
    }, 0);

    var spaceBetweenComparisonGroupsWidth = comparisonGroupsWidth / array.length / averageNumberOfComparisonBarsPerGroup;

    var numberOfSpacesBetweenComparisonGroups = array.length + 1;

    var barWidth = comparisonGroupsWidth / totalNumberOfComparisonBars;

    var mappingRatio = (svgViewBoxWidth-10)/ (comparisonGroupsWidth + spaceBetweenComparisonGroupsWidth * numberOfSpacesBetweenComparisonGroups);

    var maximumValueY = 
    !maxValue ?
    array.reduce(function findMaxInObject(acc, el){
        let elDataMax = findMaximumValue(el.data);
        if(acc < elDataMax)
            return elDataMax
        return acc;
    }, array[0].data[0])
    :
    maxValue

    return (
        <svg width="100%" viewBox="0 0 200 100" preserveAspectRatio="none">
            {[...Array(lineDensity).keys()].map(function drawHorizontalLineBehindCurveAndHeightLabel(el){
                let text = `${(maximumValueY - el / (lineDensity - 1) * maximumValueY)}`
                
                text = percentage ? text += "%" : text

                return(
                    <g key={el}>
                        <text
                            x="8" y={`${10 + el * 80 / (lineDensity-1)}`}
                            alignmentBaseline="middle"
                            textAnchor="end"
                            fontSize={lineDensity > 20 ? "2" : "3"}
                            fontFamily="Gordita Medium">
                                {text}
                        </text>

                        <path stroke="#EAEBEE" strokeWidth="0.2" d={`M10 ${10 + el * 80 / (lineDensity-1)} H200`}/>
                    </g>
                )
            })}
            {/* Mesic Ferhad - Poslovni covjek*/}
            {array.reduce(function drawComparisonGroup(accumulator, comparisonGroup, i){
                var startingPointOfGroupDrawing = accumulator[0]
                var labelPointX1 = startingPointOfGroupDrawing;

                accumulator[1] = 
                [   
                    ...accumulator[1],

                    ...comparisonGroup.data.map(function drawSingleBar(el, i){

                        let barLabelColor = comparisonGroup.colors[i] ? comparisonGroup.colors[i] : "#656C82"

                        startingPointOfGroupDrawing += barWidth * mappingRatio;
                        let heightOfBar = calculateHeightOfBar(el, maximumValueY)
                        return (
                            <g key = {startingPointOfGroupDrawing}>
                                <text
                                    // Formula for getting middle point of bar on X-axis
                                    // x = (startingPointOfBar + endingPointOfBar) / 2 
                                    x={(startingPointOfGroupDrawing + startingPointOfGroupDrawing + 
                                        (barWidth * 0.75 * mappingRatio))
                                        /2} 
                                    // 90 = 100 - (5 from top + 5 from bottom) for empty space
                                    y={90 - heightOfBar - 2.5}
                                    textAnchor="middle"
                                    fontSize="3"
                                    fontFamily="Gordita Medium"
                                    fill={barLabelColor}>
                                        {el}
                                </text>
                            <rect                 
                                x={startingPointOfGroupDrawing} 
                                // 90 = 100 - (5 from top + 5 from bottom) for empty space
                                y={90 - heightOfBar}
                                // barAndSpaceWidth is 0.75 and space between 2 bars is 0.25
                                width={barWidth * 0.75 * mappingRatio} 
                                height={heightOfBar}
                                fill="blue"
                                opacity="0.6"/>
                            </g>
                        )
                })
                ]
                
                let labelPointX2 = startingPointOfGroupDrawing + barWidth * mappingRatio;

                accumulator[1] = 
                [
                    ...accumulator[1],
                    ...[
                        <text key = {`group_label_ + ${labelPointX1}`}
                            x={(labelPointX1 + labelPointX2) / 2}
                            y="96"
                            fontSize="3"
                            fontFamily="Gordita Medium">
                                {comparisonGroup.label}
                        </text>
                    ]
                ]
                // After 1 group is drawn we continue to the drawing of next group so we
                // have to add empty space for space between groups
                startingPointOfGroupDrawing += spaceBetweenComparisonGroupsWidth * mappingRatio;
                // Update starting point for next group drawing
                accumulator[0] = startingPointOfGroupDrawing; 

                return accumulator;
            }, [10, []])[1]}
            {/* Mesic Ferhad - Poslovni covjek*/}
            
        </svg>
    )

    function findMaximumValue(array){
        return array.reduce(function findMax(acc, el){
            if (acc < el)
                return el
            return acc
        }, array[0])
    }

    function calculateHeightOfBar(value, maxValue){
        return value / maxValue * (svgViewBoxHeight - 20);
    }
}   

export default ComparisonGraph;