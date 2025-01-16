import React from 'react';
import { Typography } from '@mui/material';

const SectionHeader = ({ title }) => {
    return (
        <Typography
            variant="body1"
            sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '4px',
                color: 'text.primary',
            }}
        >
            {title}
        </Typography>
    );
};

export default SectionHeader;