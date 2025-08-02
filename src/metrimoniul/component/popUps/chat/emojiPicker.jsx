// EmojiPicker.jsx
import React from 'react';
import { Picker } from 'emoji-picker-react';
import './EmojiPicker.css';

const EmojiPickerMetri = () => {
  

  return (
    <div className="emoji-picker-container">
      <Picker onEmojiClick={onSelect} style={style}/>
    </div>
  );
};

export default EmojiPickerMetri;
