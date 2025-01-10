import React from 'react';
import { IconButton } from '@mui/material';

const StyledIconButton = ({ children, onClick, ...props }) => {
    return (
        <IconButton
            onClick={onClick}
            color="inherit"
            sx={{
                marginRight: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                display: { xs: 'flex', md: 'none' },
                ...props.sx
            }}
            {...props}
        >
            {children}
        </IconButton>
    );
};

export default StyledIconButton;