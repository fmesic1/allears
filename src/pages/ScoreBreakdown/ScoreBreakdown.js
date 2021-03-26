import React from 'react';
import ScoreCard from '../../components/ScoreCard/ScoreCard';

import classes from './ScoreBreakdown.module.css';

const ScoreBreakdown = ({scores}) => {

    scores = [{
        title : "Brand",
        points : 25,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Tech",
        points : 38,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Marketing",
        points : 12,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Customer Experience",
        points : 42,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Data",
        points : 20,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Human Resources",
        points : 2,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Products & Services",
        points : 5,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Culture",
        points : 18,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    },{
        title : "Business",
        points : 42,
        maxPoints : 50,
        questions : [
            {
                question: "Rate how purpose driven or case-led marketing communication is?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "plus"
            },
            {
                question: "Do they include customers, consider them, represent them, and value them in their brand experience?",
                sign: "minus"
            }
        ]
    }]

    return (
        <div className={classes.scoreBreakdown}>
            <div className={classes.scoreBreakdown__scoreCards}>
                {scores.map(function showCards(el, i){
                    return (
                        <div
                            key={`${el.title}_${i}`} 
                            className={classes.scoreBreakdown__scoreCards__singleCard}>
                            <ScoreCard title={el.title} points={el.points} maxPoints={el.maxPoints} questions={el.questions} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScoreBreakdown;