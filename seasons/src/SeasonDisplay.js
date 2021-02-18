import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr it be cold",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // Obs VVV
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Hit the beach'
    // const icon = season == 'winter' ? 'snowflake' : 'sun';
    const { text, iconName } = seasonConfig[season];
    // console.log(props.lat);
    // console.log(season);
    return <div>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />

    </div>
};

export default SeasonDisplay;



{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" /> */}

// If this does not resolve your issue, you can also choose to install the CSS library locally:

// npm install semantic-ui-css

// Then, import the library into your root index.js component:

// import "semantic-ui-css/semantic.min.css";