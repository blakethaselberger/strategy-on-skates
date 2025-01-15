import React from 'react';
import { Button } from '@mui/material';

const MainButton = ({ children, onClick, disabled, ...props }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={disabled}
            {...props}
            sx={{
                textTransform: 'none', // Disable uppercase transformation
                fontWeight: 600, // Bold font for emphasis
                padding: '12px 16px', // Slightly larger padding
                fontSize: '1rem', // Font size adjustment
                borderRadius: 2, // Square appearance
                color: 'white', // White text for contrast
                width: '100%', // Fill parent container
                boxSizing: 'border-box', // Ensure padding doesn't affect width
                ...props.sx, // Allow overriding styles via props
            }}
        >
            {children}
        </Button>
    );
};

export default MainButton;