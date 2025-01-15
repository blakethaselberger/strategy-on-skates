import React from 'react';
import { Button } from '@mui/material';

const SecondaryButton = ({ children, onClick, disabled, ...props }) => {
    return (
        <Button
            variant="outlined"
            color="primary" // Blue outline
            onClick={onClick}
            disabled={disabled}
            {...props}
            sx={{
                textTransform: 'none', // Disable uppercase transformation
                fontWeight: 500, // Slightly less bold for secondary emphasis
                padding: '12px 16px', // Slightly larger padding
                fontSize: '1rem', // Font size adjustment
                borderRadius: 2, // Square appearance
                color: 'hsl(210, 85%, 50%)', // Blue text
                borderWidth: 2, // Thicker border for emphasis
                borderColor: 'hsl(210, 85%, 50%)', // Blue outline color
                width: '100%', // Fill parent container
                boxSizing: 'border-box', // Ensure padding doesn't affect width
                '&:hover': {
                    backgroundColor: 'hsl(210, 85%, 95%)', // Subtle blue background on hover
                    borderWidth: 2, // Maintain border width on hover
                },
                ...props.sx, // Allow overriding styles via props
            }}
        >
            {children}
        </Button>
    );
};

export default SecondaryButton;