import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search'
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What object does a male penguin often gift to a female penguin to win her over?',
    content: 'A Rock',
  },
  {
    title: 'In Rome, which animal is protected under the law?',
    content: 'Cat',
  },
  {
    title: 'Which mammal is known to have the most powerful bite in the world?',
    content: 'Hippopotamus',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  }
];

const App = () => {
  const [selected, onSelectedChange] = useState(options);
  return(
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
        onSelectedChange={onSelectedChange}
        />
       </Route>
       <Route path="/translate">
        <Translate />
       </Route>
</div>
);
};
export default App;




// const [selected, setSelected] = useState(options[0]);
// const [showDropdown, setShowDropdown] = useState(true);
//
//   return (
//     <div>
//     <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Button</button>
//     {showDropdown ? (
//     <Dropdown
//     selected={selected}
//     onSelectedChange={setSelected}
//     options={options}
//      />
//    ) : null
//  }
//      </div>
//   );
