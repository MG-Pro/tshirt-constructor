import React from 'react';
import FontItem from './FontItem';

const FontSelector = ({fonts,  onSelect, selected}) => {
  return (
    <div className = "font-picker">
      {fonts.map((item) => {
        return <FontItem item = {item} onSelect = {onSelect} checked={selected && selected.name === item.name}/>
      })}
    </div>
  )
};

export default FontSelector;
