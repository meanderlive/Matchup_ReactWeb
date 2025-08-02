import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const ThreeDotsLoader = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%', backgroundColor: 'white' }}>
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#dc3545"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default ThreeDotsLoader;
