import React from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//     {
//         title: 'What is React',
//         content: 'React is a JS framework',
//     },
//     {
//         title: 'how do we use React',
//         content: 'Love it',
//     },
//     {
//         title: 'How do you use React',
//         content: 'By creating components',
//     },
// ];

const options = [
    {
        label: 'The Color Red',
        value: 'red',
    },
    {
        label: 'The color Green',
        value: 'green',
    },
    {
        label: 'A Shade of Blue',
        value: 'blue',
    },
];

const App = () => {
    return (
        <div>
            <Dropdown options={options} />
        </div>
    );
};

export default App;
