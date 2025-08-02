import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';

function TimerMetri() {
   const [value, setValue] = useState('10:00');

   const onChange = (time) => {
      setValue(time);
   };

   return (
      <div className="Apps">
    
         <TimePicker onChange={onChange} value={value} />
        
      </div>
   );
}

export default TimerMetri;