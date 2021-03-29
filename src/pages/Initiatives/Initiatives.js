import React from 'react';

import classes from './Initiatives.module.css';
import Dropdown from '../../components/Dropdown/Dropdown';

const Initiatives = () => {

    var initiatives_items = [
        {
            title: "Marketing",
            decorationColor: "#F97F6E"
        },
        {
            title: "Brand",
            decorationColor: "#F9B16E",
            details: [
                {
                    what: "Build brand inclusive guideline",
                    when: "Q1 2021",
                    why: "Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis. Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna. Quisque ac leo vel ex ornare aliquet. Donec auctor magna libero, non faucibus augue consequat quis. Integer feugiat nisi vel lacus vestibulum, ac auctor tortor gravida. Vestibulum laoreet, elit sit amet rutrum rutrum, erat dolor auctor ligula, id efficitur nulla mi at ante.",
                    description: 
                    <div>
                        <div style={{marginBottom: "22px"}}>Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. <b>Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis.</b> Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna.</div>
                        <ul style={{marginBottom: "22px", marginLeft: "-24px"}}>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                        <div style={{marginBottom: "22px"}}>Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. <b>Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis.</b> Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna.</div>
                        <ul style={{marginBottom: "22px", marginLeft: "-24px"}}>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                },
                {
                    what: "Build brand inclusive guideline",
                    when: "Q1 2021",
                    why: "Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis. Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna. Quisque ac leo vel ex ornare aliquet. Donec auctor magna libero, non faucibus augue consequat quis. Integer feugiat nisi vel lacus vestibulum, ac auctor tortor gravida. Vestibulum laoreet, elit sit amet rutrum rutrum, erat dolor auctor ligula, id efficitur nulla mi at ante."
                }
            ]
        },
        {
            title: "Customer Experience",
            decorationColor: "#F9DA6E"
        },
        {
            title: "Tech/Digital",
            decorationColor: "#6EF9BF",
            details: [
                {
                    what: "Build brand inclusive guideline",
                    when: "Q1 2021",
                    why: "Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis. Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna. Quisque ac leo vel ex ornare aliquet. Donec auctor magna libero, non faucibus augue consequat quis. Integer feugiat nisi vel lacus vestibulum, ac auctor tortor gravida. Vestibulum laoreet, elit sit amet rutrum rutrum, erat dolor auctor ligula, id efficitur nulla mi at ante.",
                    description: 
                    <div>
                        <div style={{marginBottom: "22px"}}>Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. <b>Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis.</b> Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna.</div>
                        <ul style={{marginBottom: "22px", marginLeft: "-24px"}}>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                        <div style={{marginBottom: "22px"}}>Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. <b>Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis.</b> Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna.</div>
                        <ul style={{marginBottom: "22px", marginLeft: "-24px"}}>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                },
                {
                    what: "Build brand inclusive guideline",
                    when: "Q2 2021",
                    why: "Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis. Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna. Quisque ac leo vel ex ornare aliquet. Donec auctor magna libero, non faucibus augue consequat quis. Integer feugiat nisi vel lacus vestibulum, ac auctor tortor gravida. Vestibulum laoreet, elit sit amet rutrum rutrum, erat dolor auctor ligula, id efficitur nulla mi at ante."
                },
                ,
                {
                    what: "Build brand inclusive guideline",
                    when: "Q3 2021",
                    why: "Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis. Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna. Quisque ac leo vel ex ornare aliquet. Donec auctor magna libero, non faucibus augue consequat quis. Integer feugiat nisi vel lacus vestibulum, ac auctor tortor gravida. Vestibulum laoreet, elit sit amet rutrum rutrum, erat dolor auctor ligula, id efficitur nulla mi at ante."
                }
            ]
        },
        {
            title: "Business",
            decorationColor: "#68C0FF"
        },
        {
            title: "Products & Services",
            decorationColor: "#6880FF"
        },
        {
            title: "Data",
            decorationColor: "#AB68FF"
        },
        {
            title: "Culture",
            decorationColor: "#FF689E"
        },
        {
            title: "Human Resources",
            decorationColor: "#FF6A6A"
        }
    ]

    return (
        <section className={classes.initiatives}> 
            
            <div className={classes.title}>Initiatives</div>

            <div className={classes.content}>
                {initiatives_items.map(function makeSingleDropdown(el, i){
                    return (
                        <div key={`${el.title}_${el.decorationColor}_${i}`}
                            className={classes.content__dropdown}>
                                <Dropdown 
                                    title = {el.title}
                                    decorationColor = {el.decorationColor}
                                    details={el.details}
                                    text="Maecenas luctus purus orci, in malesuada nibh bibendum ut. In ac sagittis nibh. Phasellus pharetra iaculis felis at cursus. Duis quis nisl dui. In efficitur in purus in dictum. Curabitur pellentesque gravida nunc, quis lobortis nisl sodales iaculis. Donec id luctus nisl. Curabitur porta facilisis orci, a aliquam magna finibus vitae. Praesent non convallis mi, a vulputate mi. Donec ligula ipsum, condimentum eget nulla eget, fringilla lacinia urna. Quisque ac leo vel ex ornare aliquet. Donec auctor magna libero, non faucibus augue consequat quis. Integer feugiat nisi vel lacus vestibulum, ac auctor tortor gravida. Vestibulum laoreet, elit sit amet rutrum rutrum, erat dolor auctor ligula, id efficitur nulla mi at ante."/>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Initiatives;