// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM

import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null); // << useState(null) returns array

    const onTitleClicked = (index) => {
        setActiveIndex(index);
        // console.log("Title Clierer", index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        // VV React.Frament helps to escape the adding line enforced by semantic ui
        return (
            <React.Fragment key={item.title}> 
                <div className={"title active" + active}
                    onClick={() => onTitleClicked(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={"content" + active}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
}

export default Accordion;