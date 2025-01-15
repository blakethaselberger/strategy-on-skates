import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const GenericBanner = ({ displayText }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 1,
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '4px',
                marginBottom: 2,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon />
                <Typography variant="subtitle1">{displayText.left}</Typography>
            </Box>
            <Typography variant="subtitle1">{displayText.right}</Typography>
        </Box>
    );
};

export default GenericBanner;