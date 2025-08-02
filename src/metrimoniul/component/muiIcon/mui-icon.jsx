import React from 'react';
import Icon from '@mui/material/Icon';

const CustomIcon = ({ icon, name }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon style={{ marginRight: '8px' }}>{icon}</Icon>
            {name}
        </div>
    );
};

export default CustomIcon;


