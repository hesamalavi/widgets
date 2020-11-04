import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React',
        content: 'React is a JS framework',
    },
    {
        title: 'how do we use React',
        content: 'Love it',
    },
    {
        title: 'How do you use React',
        content: 'By creating components',
    },
];

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default App;
