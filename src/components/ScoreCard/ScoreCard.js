import React, { useState } from 'react';
import Button from '../Buttons/Button';
import ProgressBar from '../ProgressBar/ProgressBar';

import classes from './ScoreCard.module.css';

const ScoreCard = ({title, points, maxPoints, questions}) => {

    const [expanded, setExpanded] = useState(false);

    let plusSign = 
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#46EEB2"/>
        <path d="M5 9H9M9 9V5M9 9H13M9 9V13" stroke="white" stroke-width="1.5"/>
    </svg>

    let minusSign = 
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="9" fill="#FF6157"/>
        <path d="M5 9H9H13" stroke="white" stroke-width="1.5"/>
    </svg>

    return (
        <div className={classes.scoreCard}>
            <header>
                <div className={classes.scoreCard__title}>{title}</div>
                <div className={classes.scoreCard__points}>{points} Points</div>
            </header>

            <ProgressBar value={points} maxValue={maxPoints} />

            <section className={classes.scoreCard__questions}>
                {questions.map(function writeSingleQuestion(q, i){
                    if(i > 2) return;
                    return (
                        <div key={`q_${i}`}
                            className={classes.scoreCard__questions__singleQuestion}>
                            
                            {q.sign == "plus" ? 
                            <div className={classes.sign}>{plusSign}</div>
                            :
                            <div className={classes.sign}>{minusSign}</div>}
                            {`${q.question}`} 
                        </div>
                    )
                })
                }
                {
                    questions.length > 3 && !expanded ? 
                    <div className={classes.scoreCard__questions__expandButton}>
                        <Button 
                            text = {"Expand"} 
                            showArrow 
                            buttonStyle={{color: "#466BEE", border: "1px solid #E9EBEE", backgroundColor: "white"}}
                            onClick = {() => setExpanded(!expanded)} />
                    </div>
                    :
                    questions.map(function writeSingleQuestion(q, i){
                        if(i < 3) return;
                        return (
                            <div key={`q_${i}`}
                                className={classes.scoreCard__questions__singleQuestion}>
                                
                                {q.sign == "plus" ? 
                                <div className={classes.sign}>{plusSign}</div>
                                :
                                <div className={classes.sign}>{minusSign}</div>}
                                {`${q.question}`} 
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default ScoreCard;