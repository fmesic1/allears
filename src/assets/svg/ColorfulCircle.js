import React from 'react';

const ColorfulCircle = ({number = 220, maxNumber = 305, height}) => {
    
    return (
        <svg width="414" height={height > 800 ? 414 : 314} viewBox="0 0 413 414" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M187.395 6.33789C185.068 6.55645 182.752 6.81454 180.448 7.11147C161.051 9.6116 142.517 14.8658 125.251 22.4692C123.547 23.2198 121.855 23.9932 120.176 24.7891" stroke="#FF6883" stroke-width="9" stroke-linecap="round"/>
            <path d="M100.509 35.4902C54.2223 64.1163 20.3721 110.931 8.93359 165.96" stroke="#FF6883" stroke-width="9" stroke-linecap="round"/>
            <path d="M19.1946 282.462C9.84969 259.216 4.70703 233.827 4.70703 207.238C4.70703 202.318 4.88312 197.439 5.22934 192.607" stroke="#83D2FF" stroke-width="9" stroke-linecap="round"/>
            <path d="M27.3887 297.985C39.2174 321.511 55.5019 342.398 75.13 359.529" stroke="#83D2FF" stroke-width="9" stroke-linecap="round"/>
            <path d="M273.366 397.834C252.622 405.088 230.33 409.03 207.12 409.03C164.697 409.03 125.341 395.858 92.8945 373.369" stroke="#466BEE" stroke-width="9" stroke-linecap="round"/>
            <path d="M291.275 390.579C320.02 377.281 345.105 357.382 364.598 332.819" stroke="#466BEE" stroke-width="9" stroke-linecap="round"/>
            <path d="M401.384 259.858C396.143 279.374 388.057 297.72 377.6 314.42" stroke="#FBA561" stroke-width="9" stroke-linecap="round"/>
            <path d="M400.297 150.733C405.5 168.663 408.29 187.624 408.29 207.238C408.29 216.916 407.611 226.435 406.298 235.749" stroke="#FBA561" stroke-width="9" stroke-linecap="round"/>
            <path d="M207.119 5.4458C291.113 5.4458 363.084 57.0803 393.206 130.431" stroke="#FBA561" stroke-width="9" stroke-linecap="round"/>
            <text x="50%" y="50%"
                dominantBaseline="middle"
                textAnchor="middle">
                <tspan 
                    fontSize = "70"
                    fontFamily="Gordita Medium"
                    x="50%"
                    dy="-16"
                    fill="white">{number}</tspan>
                <tspan
                    fontSize = "20"
                    fontFamily="Gordita Medium"
                    x="50%"
                    dy= {height > 800 ? '70' : '54'}
                    fill="white">Out of {maxNumber}</tspan>
            </text>
        </svg>

    )
}

export default ColorfulCircle;