import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';

function App() {
   const [value, setValue] = useState('10:00');

   const onChange = (val) => {
      setValue(val);
   };

   return (
      <div className="Apps">
    
         <TimePicker onChange={onChange} value={value} />
        
      </div>
   );
}

export default App;