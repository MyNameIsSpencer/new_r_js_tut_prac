import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript frameowrk'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },

];

// These 4 replaced by other
// const showAccordion = () => {
//     if (window.location.pathname ==='/') {
//         return <Accordion items={items} />
//     }
// }

// const showList = () => {
//     if (window.location.pathname === '/list') {
//         return <Search />;
//     }
// };

// const showDropdown = () => {
//     if (window.location.pathname === '/dropdown') {
//         return <Dropdown />;
//     }
// };

// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//         return <Dropdown />;
//     }
// };



export default () => {
    // VV Not irrelevant, was for Dropdown
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/">
                <Translate />
            </Route>


            {/* {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()} */}

            {/* <Translate /> */}


            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown
                ? <Dropdown
                        selected={selected}
                        onSelectedChange={setSelected}
                        options={options}
                    />
                : null
            }
            <h1>{showDropdown}</h1> */}
        </div>
    )
};