import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label,  options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
  const onBodyClick = (event) => {
      if(ref.current.contains(event.target)){
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

const renderedOptions = options.map((options) => {
    if(options.value === selected.value) {
      return null;
    }

    return(
      <div
      key={options.value}
      className="item"
      onClick={() => {
      onSelectedChange(options);
      }}
       >
         {options.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
     <div className="field">
        <label className="label">{label}</label>
        <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible' : ''} transition`}>{renderedOptions}</div>
        </div>
     </div>
    <h3 style={{color: selected.value}}> {selected.label} </h3>
    </div>
  );
};

export default Dropdown;
