import React from 'react';
import { Box, Typography } from '@mui/material';

const RoundHeader = ({ roundNumber }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 1,
                backgroundColor: 'background.default',
                color: 'text.primary',
                borderBottom: '1px solid',
                borderColor: 'divider',
                width: '100%', // Ensures it spans the entire box
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                Round {roundNumber}
            </Typography>
        </Box>
    );
};

export default RoundHeader;