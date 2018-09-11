import React from 'react';
import PictureFont from './PictureFont';

const FontItem = props => {
  const {name, path} = props.item;
  let font;
  const inputHandler = () => {
    props.onSelect(font)
  };

  return (
    <div className="grid center font-item">
      <input type="radio" name="font" value={name} id={name} onChange={inputHandler}
        ref={() => font = props.item} defaultChecked={props.checked}/>
      <label htmlFor={name} className="grid-1">
        <PictureFont text={name.replace(name[name.length - 1], '')} path={path}/>
      </label>
    </div>
  );
};

export default FontItem;
